'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.css';

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

export default function DatabaseTablesPage() {
  const [tables, setTables] = useState<TableInfo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

  useEffect(() => {
    loadTables();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>📊 Tables de la base de données</h1>

      <div className={styles.section}>
        <button
          onClick={loadTables}
          disabled={loading}
          className={styles.button}
        >
          {loading ? 'Chargement...' : 'Actualiser'}
        </button>

        {tables.length > 0 && (
          <div className={styles.result}>
            <h3 className={styles.resultTitle}>📋 {tables.length} tables trouvées</h3>
            <div className={styles.tableList}>
              {tables.map((table, index) => (
                <div key={index} className={styles.tableItem}>
                  <span className={styles.schema}>{table.SchemaName}</span>
                  <span className={styles.tableName}>{table.Nom_Table}</span>
                  <span className={styles.type}>{table.Type_Table}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {loading && tables.length === 0 && (
          <div className={styles.loading}>
            <p>Chargement des tables...</p>
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