import { NextRequest, NextResponse } from 'next/server';
import { testConnection } from '@/lib/database';

export async function GET(request: NextRequest) {
  try {
    console.log('� Test de connexion à la base de données...');

    const result = await testConnection();

    if (result.success) {
      console.log('✅ Connexion réussie');
      return NextResponse.json({
        success: true,
        message: result.message,
        data: result.details,
      });
    } else {
      console.log('❌ Échec de connexion');
      return NextResponse.json({
        success: false,
        message: result.message,
      }, { status: 500 });
    }
  } catch (error) {
    console.error('❌ Erreur lors du test de connexion:', error);
    return NextResponse.json({
      success: false,
      message: `Erreur: ${error}`,
    }, { status: 500 });
  }
}