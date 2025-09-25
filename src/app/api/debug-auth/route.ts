import { NextRequest, NextResponse } from 'next/server';
import sql from 'mssql';

export async function GET(request: NextRequest) {
  try {
    console.log('🔍 [DEBUG AUTH] Test complet d\'authentification...');
    
    // Test 1: Variables d'environnement
    const envCheck = {
      DB_SERVER: !!process.env.DB_SERVER,
      DB_DATABASE: !!process.env.DB_DATABASE,
      serverValue: process.env.DB_SERVER,
      databaseValue: process.env.DB_DATABASE,
    };
    
    console.log('🔍 [DEBUG AUTH] Variables d\'environnement:', envCheck);
    
    // Test 2: Configuration de connexion
    const config: sql.config = {
      server: process.env.DB_SERVER || '',
      database: process.env.DB_DATABASE || '',
      authentication: {
        type: 'azure-active-directory-default',
        options: {},
      },
      options: {
        encrypt: true,
        trustServerCertificate: false,
      },
      connectionTimeout: 30000,
      requestTimeout: 30000,
    };
    
    console.log('🔍 [DEBUG AUTH] Configuration:', {
      server: config.server,
      database: config.database,
      authType: config.authentication?.type,
    });
    
    // Test 3: Tentative de connexion
    console.log('🔍 [DEBUG AUTH] Tentative de connexion...');
    const pool = new sql.ConnectionPool(config);
    
    await pool.connect();
    console.log('✅ [DEBUG AUTH] Connexion réussie !');
    
    // Test 4: Test d'identité
    const request = pool.request();
    const result = await request.query(`
      SELECT 
        SUSER_SNAME() as Utilisateur_Azure,
        USER_NAME() as Utilisateur_DB,
        @@SERVERNAME as Serveur,
        DB_NAME() as Database_Actuelle,
        GETDATE() as Date_Test
    `);
    
    console.log('✅ [DEBUG AUTH] Requête d\'identité réussie:', result.recordset[0]);
    
    await pool.close();
    
    return NextResponse.json({
      success: true,
      message: 'Authentification réussie !',
      environment: envCheck,
      identity: result.recordset[0],
      config: {
        server: config.server,
        database: config.database,
        authType: config.authentication?.type,
      }
    });
    
  } catch (error) {
    console.error('❌ [DEBUG AUTH] Erreur détaillée:', error);
    
    const errorDetails = {
      message: error instanceof Error ? error.message : String(error),
      name: error instanceof Error ? error.name : 'Unknown',
      code: (error as any)?.code,
      number: (error as any)?.number,
      state: (error as any)?.state,
      class: (error as any)?.class,
      stack: error instanceof Error ? error.stack : undefined,
    };
    
    return NextResponse.json({
      success: false,
      message: 'Erreur d\'authentification',
      error: errorDetails,
      environment: {
        DB_SERVER: !!process.env.DB_SERVER,
        DB_DATABASE: !!process.env.DB_DATABASE,
      }
    }, { status: 500 });
  }
}