// Debug API pour tester la connexion
import { NextRequest, NextResponse } from 'next/server';
import { testConnection } from '@/lib/database';

export async function GET(request: NextRequest) {
  try {
    console.log('🔍 Test de connexion à la base de données...');
    console.log('Variables d\'environnement:');
    console.log('DB_SERVER:', process.env.DB_SERVER ? '✅ Défini' : '❌ Manquant');
    console.log('DB_DATABASE:', process.env.DB_DATABASE ? '✅ Défini' : '❌ Manquant');
    console.log('DB_ENCRYPT:', process.env.DB_ENCRYPT);
    console.log('DB_TRUST_SERVER_CERTIFICATE:', process.env.DB_TRUST_SERVER_CERTIFICATE);

    const connectionTest = await testConnection();
    
    return NextResponse.json({
      success: connectionTest.success,
      message: connectionTest.message,
      details: connectionTest.details,
      env: {
        hasServer: !!process.env.DB_SERVER,
        hasDatabase: !!process.env.DB_DATABASE,
        encrypt: process.env.DB_ENCRYPT,
        trustCert: process.env.DB_TRUST_SERVER_CERTIFICATE,
      }
    });
  } catch (error) {
    console.error('❌ Erreur lors du test de connexion:', error);
    return NextResponse.json({
      success: false,
      message: `Erreur: ${error}`,
      error: error instanceof Error ? error.message : String(error),
    }, { status: 500 });
  }
}