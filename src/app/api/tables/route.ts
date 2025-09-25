import { NextRequest, NextResponse } from 'next/server';
import { executeQuery } from '@/lib/database';

interface TableInfo {
  SchemaName: string;
  Nom_Table: string;
  Type_Table: string;
}

export async function GET(request: NextRequest) {
  try {
    console.log('� [DEBUG] Début de la récupération des tables...');
    
    // Debug des variables d'environnement
    console.log('🔍 [DEBUG] Variables d\'environnement:');
    console.log(`  - DB_SERVER: ${process.env.DB_SERVER ? '✅ Défini (' + process.env.DB_SERVER + ')' : '❌ MANQUANT'}`);
    console.log(`  - DB_DATABASE: ${process.env.DB_DATABASE ? '✅ Défini (' + process.env.DB_DATABASE + ')' : '❌ MANQUANT'}`);
    console.log(`  - DB_ENCRYPT: ${process.env.DB_ENCRYPT || 'Non défini'}`);
    console.log(`  - DB_TRUST_SERVER_CERTIFICATE: ${process.env.DB_TRUST_SERVER_CERTIFICATE || 'Non défini'}`);
    console.log(`  - NODE_ENV: ${process.env.NODE_ENV || 'Non défini'}`);

    console.log('🔍 [DEBUG] Tentative de connexion à la base de données...');
    
    const tables = await executeQuery<TableInfo>(`
      SELECT
        TABLE_SCHEMA as SchemaName,
        TABLE_NAME as Nom_Table,
        TABLE_TYPE as Type_Table
      FROM INFORMATION_SCHEMA.TABLES
      WHERE TABLE_TYPE = 'BASE TABLE'
      ORDER BY TABLE_SCHEMA, TABLE_NAME
    `);

    console.log(`✅ [DEBUG] Connexion réussie ! ${tables.length} tables trouvées`);
    console.log('✅ [DEBUG] Première table:', tables[0] || 'Aucune table');

    return NextResponse.json({
      success: true,
      message: `${tables.length} tables trouvées`,
      data: tables,
    });
  } catch (error) {
    console.error('❌ [DEBUG] ERREUR DÉTAILLÉE lors de la récupération des tables:');
    console.error('❌ [DEBUG] Type d\'erreur:', typeof error);
    console.error('❌ [DEBUG] Message d\'erreur:', error instanceof Error ? error.message : error);
    console.error('❌ [DEBUG] Stack trace:', error instanceof Error ? error.stack : 'Pas de stack trace');
    
    if (error && typeof error === 'object' && 'code' in error) {
      console.error('❌ [DEBUG] Code d\'erreur SQL Server:', (error as any).code);
      console.error('❌ [DEBUG] Numéro d\'erreur SQL Server:', (error as any).number);
      console.error('❌ [DEBUG] État d\'erreur SQL Server:', (error as any).state);
      console.error('❌ [DEBUG] Classe d\'erreur SQL Server:', (error as any).class);
    }

    return NextResponse.json({
      success: false,
      message: `Erreur: ${error instanceof Error ? error.message : error}`,
      debug: {
        errorType: typeof error,
        errorCode: error && typeof error === 'object' && 'code' in error ? (error as any).code : null,
        hasDbServer: !!process.env.DB_SERVER,
        hasDbDatabase: !!process.env.DB_DATABASE,
        nodeEnv: process.env.NODE_ENV,
      }
    }, { status: 500 });
  }
}