// 'use client';
// import { handleExport } from '../excel-export/excel-export';
// import { useTranslation } from '../hooks/useTranslation';
// import Image from '../../../public/admin_boat.jpg';
// import AdminHeader from '../adminHeader/adminHeader';
// import style from './page.module.css';
// import Link from 'next/link';

// export default function AdminBoard(){
//     const t = useTranslation("adminpage")

//     return (
//         <>
//         <AdminHeader />
//             <main className={style.board}>
//                 <div className={style.navCubes}>
//                     <p className={style.link}>{t.requests}</p>
//                     <Link href='./admin/companies' className={style.link}>{t.companies}</Link>
//                     <Link href='./admin/users' className={style.link}>{t.users}</Link>
//                     <Link href='./admin/issueCodes' className={style.link}>{t.issueCodes}</Link>
//                 </div>
//                 <div className={style.sideBar}>
//                     <img src={Image.src}></img>
//                     <button className={style.excel} onClick={handleExport}>{t.excel}</button>
//                 </div>
//             </main>
//         </>
//     )
// }


'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.css';

interface ConnectionTest {
  Version_SQL_Server: string;
  Nom_Serveur: string;
  Base_Actuelle: string;
  Utilisateur_Connecte: string;
  Date_Connexion: string;
}

interface TableInfo {
  SchemaName: string;
  Nom_Table: string;
  Type_Table: string;
}

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
}

export default function TestDatabase() {
  const [connectionTest, setConnectionTest] = useState<ConnectionTest | null>(null);
  const [tables, setTables] = useState<TableInfo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const testConnection = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api');
      const result: ApiResponse<ConnectionTest> = await response.json();
      
      if (result.success && result.data) {
        setConnectionTest(result.data);
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError(`Erreur de connexion: ${err}`);
    } finally {
      setLoading(false);
    }
  };

  const loadTables = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/tables');
      const result: ApiResponse<TableInfo[]> = await response.json();
      
      if (result.success && result.data) {
        setTables(result.data);
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError(`Erreur lors du chargement des tables: ${err}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>🧪 Test de connexion à la base de données</h1>
      
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Test de connexion</h2>
        <button 
          onClick={testConnection} 
          disabled={loading}
          className={styles.button}
        >
          {loading ? 'Test en cours...' : 'Tester la connexion'}
        </button>
        
        {connectionTest && (
          <div className={styles.result}>
            <h3 className={styles.resultTitle}>✅ Connexion réussie</h3>
            <div className={styles.info}>
              <p><strong>Serveur:</strong> {connectionTest.Nom_Serveur}</p>
              <p><strong>Base:</strong> {connectionTest.Base_Actuelle}</p>
              <p><strong>Utilisateur:</strong> {connectionTest.Utilisateur_Connecte}</p>
              <p><strong>Date:</strong> {new Date(connectionTest.Date_Connexion).toLocaleString()}</p>
              <p><strong>Version:</strong> {connectionTest.Version_SQL_Server}</p>
            </div>
          </div>
        )}
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Tables disponibles</h2>
        <button 
          onClick={loadTables} 
          disabled={loading}
          className={styles.button}
        >
          {loading ? 'Chargement...' : 'Charger les tables'}
        </button>
        
        {tables.length > 0 && (
          <div className={styles.result}>
            <h3 className={styles.resultTitle}>📋 {tables.length} tables trouvées</h3>
            <div className={styles.tableList}>
              {tables.map((table, index) => (
                <div key={index} className={styles.tableItem}>
                  <span className={styles.schema}>{table.SchemaName}</span>
                  <span className={styles.tableName}>{table.Nom_Table}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {error && (
        <div className={styles.error}>
          <h3 className={styles.resultTitle}>❌ Erreur</h3>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}