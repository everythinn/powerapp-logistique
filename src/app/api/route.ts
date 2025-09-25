import { NextRequest, NextResponse } from 'next/server';
import { executeQuery } from '@/lib/database';

interface TableInfo {
  SchemaName: string;
  Nom_Table: string;
  Type_Table: string;
}

export async function GET(request: NextRequest) {
  try {
    console.log('📋 Récupération de la liste des tables...');
    
    const tables = await executeQuery<TableInfo>(`
      SELECT 
        TABLE_SCHEMA as SchemaName,
        TABLE_NAME as Nom_Table,
        TABLE_TYPE as Type_Table
      FROM INFORMATION_SCHEMA.TABLES 
      WHERE TABLE_TYPE = 'BASE TABLE'
      ORDER BY TABLE_SCHEMA, TABLE_NAME
    `);
    
    console.log(`✅ ${tables.length} tables trouvées`);
    
    return NextResponse.json({
      success: true,
      message: `${tables.length} tables trouvées`,
      data: tables,
    });
  } catch (error) {
    console.error('❌ Erreur lors de la récupération des tables:', error);
    return NextResponse.json({
      success: false,
      message: `Erreur: ${error}`,
    }, { status: 500 });
  }
}