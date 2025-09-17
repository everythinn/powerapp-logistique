Optimizing tool selection...

Searching codebase for "tu peux me faire un tuto sur comment se connecter a la base de donnée comme on a fait dans cette app avec msnosql etc 
pour que je puisse le repodruire sur une autre app "

Tu veux reproduire la connexion à Azure SQL comme dans cette app (msnodesqlv8 + MFA + cache d’auth) — je te fais un tuto pas-à-pas avec les bonnes pratiques, les prérequis et un module réutilisable.

## Vue d’ensemble

- Objectif: se connecter à Azure SQL Database depuis Node.js avec msnodesqlv8 via Azure AD Interactive (MFA), et exécuter des requêtes.
- Points clés:
  - Driver ODBC Microsoft (v17 ou v18)
  - Package npm msnodesqlv8 (module natif → nécessite outils de build)
  - Connexion “Authentication=ActiveDirectoryInteractive” (MFA) côté dev
  - Cache d’auth pour éviter les prompts répétés
  - Pour serveur non-interactif: préférer Service Principal ou Managed Identity

## Prérequis

- Windows (tu y es déjà), Node.js 18+
- Microsoft ODBC Driver pour SQL Server:
  - Recommandé: ODBC Driver 18
  - Alternative si tu gardes l’existant: ODBC Driver 17
- Outils de build pour msnodesqlv8:
  - Visual Studio Build Tools (C++), Python 3, node-gyp
- Compte Azure AD autorisé sur la base (droits au niveau de la DB)
  - Dans SQL, le user doit exister côté Azure AD et avoir des rôles (par exemple db_datareader/db_datawriter). Exemple (à exécuter sur la base cible):
    - CREATE USER [ton.user@domaine.com] FROM EXTERNAL PROVIDER;
    - ALTER ROLE db_datareader ADD MEMBER [ton.user@domaine.com];

## Installation (PowerShell)

```powershell
# 1) Installer ODBC Driver 18 (recommandé) via winget
winget install --id=Microsoft.MicrosoftODBCDriver18forSQLServer -e

# 2) Ou ODBC Driver 17 pour rester conforme à ta chaîne actuelle
winget install --id=Microsoft.MicrosoftODBCDriver17forSQLServer -e

# 3) Installer msnodesqlv8 (avec build tools prêts)
npm install msnodesqlv8
```

Astuce: si la compilation échoue, installe “Visual Studio Build Tools” (Desktop development with C++) et Python 3, puis relance `npm install`.

## Connexion: principes de la chaîne

- Connexion string (Interactive / MFA):
  - Driver={ODBC Driver 17 for SQL Server} ou {ODBC Driver 18 for SQL Server}
  - Server=tonserveur.database.windows.net
  - Database=ta_base
  - Authentication=ActiveDirectoryInteractive
  - Encrypt=Yes
  - TrustServerCertificate=No (en prod) / Yes (local seulement)

Exemple (v17, comme dans ton app):
```
Driver={ODBC Driver 17 for SQL Server};
Server=gbensqlsvraistranscoprd.database.windows.net;
Database=gbensqldbaistranscoprd;
Authentication=ActiveDirectoryInteractive;
Encrypt=Yes;TrustServerCertificate=Yes;
```

Exemple (v18, recommandé, prod):
```
Driver={ODBC Driver 18 for SQL Server};
Server=...;
Database=...;
Authentication=ActiveDirectoryInteractive;
Encrypt=Yes;TrustServerCertificate=No;
```

## Module réutilisable (pattern de l’app)

Voici un module minimal inspiré de dbAuth.js, avec:
- Auth Interactive + cache de 4h
- Exécution de requêtes avec rappel au cache

À créer par exemple dans dbAuth.js de ta nouvelle app:

```js
// lib/database/dbAuth.js
const sql = require("msnodesqlv8");

// Connexions (duplique si plusieurs bases)
const connectionConfigs = {
  default: {
    connectionString:
      "Driver={ODBC Driver 17 for SQL Server};" +
      `Server=${process.env.AZURE_SQL_SERVER};` +
      `Database=${process.env.AZURE_SQL_DATABASE};` +
      "Authentication=ActiveDirectoryInteractive;" +
      "Encrypt=Yes;TrustServerCertificate=Yes;",
    name: "Base principale"
  }
};

// État d'auth
const authState = {
  default: { isAuthenticated: false, lastAuthTime: null, connectionPromise: null }
};

const AUTH_VALID_DURATION = 4 * 60 * 60 * 1000; // 4h

async function authenticate(dbKey = "default") {
  const config = connectionConfigs[dbKey];
  const state = authState[dbKey];
  if (!config) throw new Error(`DB inconnue: ${dbKey}`);

  // Cache actif ?
  if (state.isAuthenticated && state.lastAuthTime && Date.now() - state.lastAuthTime < AUTH_VALID_DURATION) {
    return;
  }
  // Auth déjà en cours ?
  if (state.connectionPromise) {
    return state.connectionPromise;
  }

  // Nouvelle auth interactive
  state.connectionPromise = new Promise((resolve, reject) => {
    sql.query(config.connectionString, "SELECT 1 AS Test, DB_NAME() AS DatabaseName", (err, rows) => {
      state.connectionPromise = null;
      if (err) return reject(err);
      state.isAuthenticated = true;
      state.lastAuthTime = Date.now();
      resolve();
    });
  });

  return state.connectionPromise;
}

async function executeQuery(query, dbKey = "default") {
  await authenticate(dbKey);
  const config = connectionConfigs[dbKey];

  return new Promise((resolve, reject) => {
    sql.query(config.connectionString, query, (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });
}

function resetAuthCache(dbKey = "default") {
  if (dbKey === "all") {
    Object.keys(authState).forEach(k => (authState[k] = { isAuthenticated: false, lastAuthTime: null, connectionPromise: null }));
  } else if (authState[dbKey]) {
    authState[dbKey] = { isAuthenticated: false, lastAuthTime: null, connectionPromise: null };
  }
}

module.exports = { authenticate, executeQuery, resetAuthCache, connectionConfigs, authState };
```

Points importants:
- `sql.query` déclenche l’ouverture de connexion ODBC et l’écran de login Microsoft (MFA) la première fois.
- Le cache évite de réauthentifier pendant 4h (adaptable).
- Le `connectionPromise` empêche les authentifications concurrentes.

Si tu dois gérer deux bases (comme `common` et `transco`), garde deux entrées dans `connectionConfigs` et duplique l’état/auth logique (comme ton fichier existant).

## Variables d’environnement (.env)

Dans ta nouvelle app, ajoute:
```
AZURE_SQL_SERVER=tonserveur.database.windows.net
AZURE_SQL_DATABASE=ta_base
```

Option: si tu as plusieurs bases, ajoute `AZURE_SQL_DATABASE_COMMON` / `AZURE_SQL_DATABASE_TRANSCO` et adapte le `connectionConfigs`.

Note: Ne stocke pas de secrets pour Interactive. En prod, préfère une auth non-interactive (voir plus bas).

## Test rapide

Crée un petit script `scripts/test-db.js`:

```js
const { executeQuery } = require("../lib/database/dbAuth");

(async () => {
  try {
    const rows = await executeQuery("SELECT TOP 1 name FROM sys.objects");
    console.log("OK:", rows?.[0]);
  } catch (e) {
    console.error("Erreur:", e);
    process.exit(1);
  }
})();
```

Exécute en PowerShell à la racine du projet:
```powershell
node .\scripts\test-db.js
```

La première exécution affiche la fenêtre interactive Microsoft; une fois validée, la requête s’exécute et le cache est actif.

## Intégration dans une API (Next.js route handler / Express)

- Next.js (route handler):
  ```ts
  // app/api/example/route.ts
  import { NextResponse } from 'next/server';
  const { executeQuery } = require('@/lib/database/dbAuth');

  export async function GET() {
    try {
      const rows = await executeQuery("SELECT TOP 10 * FROM dbo.MaTable");
      return NextResponse.json({ data: rows });
    } catch (e:any) {
      return NextResponse.json({ error: e.message }, { status: 500 });
    }
  }
  ```

- Express:
  ```js
  const express = require('express');
  const { executeQuery } = require('./lib/database/dbAuth');
  const app = express();

  app.get('/api/items', async (req, res) => {
    try {
      const rows = await executeQuery("SELECT TOP 50 * FROM dbo.Items");
      res.json(rows);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  });

  app.listen(3000);
  ```

## Dépannage courant

- Erreur d’installation msnodesqlv8:
  - Vérifie Build Tools C++ + Python 3 installés, puis `npm rebuild`.
- “Login failed for user …”:
  - Crée l’utilisateur Azure AD dans la base (EXTERNAL PROVIDER) et assigne des rôles.
- “ODBC Driver not found”:
  - Le nom du driver doit correspondre exactement à celui installé. Change “ODBC Driver 17/18” dans la connexion.
- “TrustServerCertificate=No” en local:
  - Si ça échoue: passe temporairement à Yes en dev. En prod, garde No.
- MFA réapparaît trop souvent:
  - Augmente `AUTH_VALID_DURATION`, ou évite de redémarrer le process trop souvent.

## Pour un environnement non-interactif (PROD)

Interactive/MFA n’est pas viable côté serveur. Utilise une identité applicative:

- Service Principal (App Registration avec secret ou certificat):
  - Connexion string (ODBC 18, recommandé):
    ```
    Driver={ODBC Driver 18 for SQL Server};
    Server=tonserveur.database.windows.net;
    Database=ta_base;
    Authentication=ActiveDirectoryServicePrincipal;
    Encrypt=Yes;TrustServerCertificate=No;
    User Id=<APPLICATION_ID>;
    Password=<CLIENT_SECRET>;
    ```
  - Crée le user AAD correspondant dans la DB et assigne des rôles.
  - Stocke secret dans Key Vault ou variable d’env chiffrée.

- Managed Identity (si déployé sur Azure VM/Container App/App Service):
  - Préférable (pas de secret à gérer).
  - Connexion string:
    ```
    Driver={ODBC Driver 18 for SQL Server};
    Server=...;Database=...;
    Authentication=ActiveDirectoryMsi;
    Encrypt=Yes;TrustServerCertificate=No;
    ```
  - Assigne la MI à la base (CREATE USER FROM EXTERNAL PROVIDER + rôle).

- Alternative token explicite:
  - Récupère un access token via `@azure/identity` / `msal-node` puis passe `Authentication=ActiveDirectoryAccessToken;` et injecte le token (APIs avancées msnodesqlv8).

## Sécurité et bonnes pratiques

- En dev: TrustServerCertificate=Yes tolérable. En prod: No.
- Évite de hardcoder serveur et base → passe par env (.env + process.env).
- Ne logge jamais les connection strings complètes (surtout en SP).
- Si tu dois paralléliser beaucoup de requêtes, pense à mutualiser l’auth (comme le `connectionPromise`) et limiter la pression (batching, pagination).

---

Si tu veux, je peux te générer le squelette des fichiers dans ta nouvelle app (module `dbAuth`, script de test, config .env) selon le nom de ta base et ton driver (17 vs 18). Donne-moi juste le nom du projet et je te le pose directement.  - Assigne la MI à la base (CREATE USER FROM EXTERNAL PROVIDER + rôle).

- Alternative token explicite:
  - Récupère un access token via `@azure/identity` / `msal-node` puis passe `Authentication=ActiveDirectoryAccessToken;` et injecte le token (APIs avancées msnodesqlv8).

## Sécurité et bonnes pratiques

- En dev: TrustServerCertificate=Yes tolérable. En prod: No.
- Évite de hardcoder serveur et base → passe par env (.env + process.env).
- Ne logge jamais les connection strings complètes (surtout en SP).
- Si tu dois paralléliser beaucoup de requêtes, pense à mutualiser l’auth (comme le `connectionPromise`) et limiter la pression (batching, pagination).

---

Si tu veux, je peux te générer le squelette des fichiers dans ta nouvelle app (module `dbAuth`, script de test, config .env) selon le nom de ta base et ton driver (17 vs 18). Donne-moi juste le nom du projet et je te le pose directement.