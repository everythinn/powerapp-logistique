import sql from 'mssql';

const config: sql.config = {
  server: process.env.DB_SERVER || '',
  database: process.env.DB_DATABASE || '',
  authentication: {
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
    poolPromise = new sql.ConnectionPool(config).connect();

    poolPromise.catch((err) => {
      console.error('Erreur de connexion à la base de données:', err);
      poolPromise = null;
      throw err;
    })
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
    const pool = await getPool();
    const request = pool.request();
    
    // Ajouter les paramètres si fournis
    if (params) {
      Object.keys(params).forEach((key) => {
        request.input(key, params[key]);
      });
    }
    
    const result = await request.query(query);
    return result.recordset;
  } catch (error) {
    console.error('Erreur lors de l\'exécution de la requête:', error);
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
