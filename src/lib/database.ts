import sql from 'mssql';

const config: sql.config = {
  server: process.env.DB_SERVER || '',
  database: process.env.DB_DATABASE || '',
  authentication: process.env.AZURE_ACCESS_TOKEN 
    ? {
        type: 'azure-active-directory-access-token',
        options: {
          token: process.env.AZURE_ACCESS_TOKEN,
        },
      }
    : {
        type: 'azure-active-directory-default',
        options: {
          // Pour l'authentification par défaut Azure
        },
      },
  options: {
    encrypt: process.env.DB_ENCRYPT === 'true',
    trustServerCertificate: process.env.DB_TRUST_SERVER_CERTIFICATE === 'true',
  },
  connectionTimeout: parseInt(process.env.DB_CONNECTION_TIMEOUT || '30', 10) * 1000,
  requestTimeout: 30000,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
};

let poolPromise: Promise<sql.ConnectionPool> | null = null;

// Pool de connexions global
async function getPool(): Promise<sql.ConnectionPool> {
  if(!poolPromise){
    console.log('🔍 [DEBUG DATABASE] Création d\'une nouvelle connexion...');
    console.log('🔍 [DEBUG DATABASE] Configuration de connexion:');
    console.log(`  - Serveur: ${config.server}`);
    console.log(`  - Base de données: ${config.database}`);
    console.log(`  - Type d'authentification: ${config.authentication?.type}`);
    console.log(`  - Encrypt: ${config.options?.encrypt}`);
    console.log(`  - Trust Certificate: ${config.options?.trustServerCertificate}`);
    
    poolPromise = new sql.ConnectionPool(config).connect();

    poolPromise.catch((err) => {
      console.error('❌ [DEBUG DATABASE] Erreur de connexion à la base de données:');
      console.error('❌ [DEBUG DATABASE] Message:', err.message);
      console.error('❌ [DEBUG DATABASE] Code:', err.code);
      console.error('❌ [DEBUG DATABASE] Stack:', err.stack);
      poolPromise = null;
      throw err;
    });

    poolPromise.then(() => {
      console.log('✅ [DEBUG DATABASE] Connexion établie avec succès !');
    });
  } else {
    console.log('🔍 [DEBUG DATABASE] Réutilisation de la connexion existante');
  }

  return poolPromise;
}

/**
 * Exécute une requête SQL
 * @param query La requête SQL à exécuter
 * @param params Les paramètres de la requête
 * @returns Le résultat de la requête
 */
export async function executeQuery<T = any>(
  query: string,
  params?: { [key: string]: any }
): Promise<T[]> {
  try {
    console.log('🔍 [DEBUG DATABASE] Exécution de la requête...');
    console.log('🔍 [DEBUG DATABASE] Requête:', query.substring(0, 200) + (query.length > 200 ? '...' : ''));
    
    const pool = await getPool();
    console.log('🔍 [DEBUG DATABASE] Pool de connexions obtenu');
    
    const request = pool.request();
    
    // Ajouter les paramètres si fournis
    if (params) {
      console.log('🔍 [DEBUG DATABASE] Ajout des paramètres:', Object.keys(params));
      Object.keys(params).forEach((key) => {
        request.input(key, params[key]);
      });
    }
    
    console.log('🔍 [DEBUG DATABASE] Envoi de la requête...');
    const result = await request.query(query);
    console.log('✅ [DEBUG DATABASE] Requête exécutée avec succès, nombre de lignes:', result.recordset.length);
    
    return result.recordset;
  } catch (error) {
    console.error('❌ [DEBUG DATABASE] Erreur lors de l\'exécution de la requête:');
    console.error('❌ [DEBUG DATABASE] Message:', error instanceof Error ? error.message : error);
    console.error('❌ [DEBUG DATABASE] Stack:', error instanceof Error ? error.stack : 'Pas de stack');
    throw error;
  }
}

/**
 * Ferme toutes les connexions à la base de données
 */
export async function closePool(): Promise<void> {
  if (poolPromise) {
    const pool = await poolPromise;
    await pool.close();
    poolPromise = null;
  }
}

/**
 * Test de connexion à la base de données
 */
export async function testConnection(): Promise<{
  success: boolean;
  message: string;
  details?: any;
}> {
  try {
    const result = await executeQuery(`
      SELECT 
        @@VERSION as Version_SQL_Server,
        @@SERVERNAME as Nom_Serveur,
        DB_NAME() as Base_Actuelle,
        SUSER_SNAME() as Utilisateur_Connecte,
        GETDATE() as Date_Connexion
    `);
    
    return {
      success: true,
      message: 'Connexion réussie',
      details: result[0],
    };
  } catch (error) {
    return {
      success: false,
      message: `Erreur de connexion: ${error}`,
    };
  }
}

// Types utiles pour vos données
export interface DatabaseResult<T> {
  data: T[];
  error?: string;
}

export { sql };
