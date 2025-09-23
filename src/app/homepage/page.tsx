'use client';
import { useLang } from '../context/langContext';
import { exportToExcel } from '../excel-export/excel-export';
import Link from 'next/link';
import Image from '../../../public/homepage_boat.jpg';
import style from './page.module.css';


export default function Homepage() {
  const context = useLang();

  const handleExport = () => {
    const data = [
      { Nom: "Jean", Âge: 30, Ville: "Paris" },
      { Nom: "Marie", Âge: 25, Ville: "Lyon" },
    ];
    exportToExcel(data, "MonFichierExcel");
  };
  
  return (
    <main className={style.home}>
      {context.lang === "FR" ? (
        <>
          <div className={style.navCubes}>
            <div className={style.navTop}>
              <Link href='./requests' className={style.navLink}>Mes demandes</Link>
              <p className={style.navLink}>Mes assignations</p>
            </div>
            <p className={style.navLink}>Toutes les demandes</p>
          </div>
          <div className={style.sideBar}>
            <Link href='./add/request' className={style.sideLink}>Nouvelle demande</Link>
            <img src={Image.src}></img>
            <button className={style.sideLink} onClick={handleExport}>Extraction Excel </button>
          </div>
        </>
      ) : (
        <>
          <div className={style.navCubes}>
            <div className={style.navTop}>
              <Link href='./requests' className={style.navLink}>My requests</Link>
              <p className={style.navLink}>My assignments</p>
            </div>
            <p className={style.navLink}>All requests</p>
          </div>
          <div className={style.sideBar}>
            <Link href='./add/request' className={style.sideLink}>New request</Link>
            <img src={Image.src}></img>
            <button className={style.sideLink} onClick={handleExport}>Excel extraction</button>
          </div>
        </>
      )}
    </main>
  );
}
