'use client';
import { useLang } from '../context/langContext';
import style from './page.module.css';
import Image from '../../../public/homepage_boat.jpg';

export default function Homepage() {
  const context = useLang();
  
  return (
    <main className={style.home}>
      {context.lang === "FR" ? (
        <>
          <div className={style.navCubes}>
            <div className={style.navTop}>
              <p>Mes demandes</p>
              <p>Mes assignations</p>
            </div>
            <p>Toutes les demandes</p>
          </div>
          <div className={style.sideBar}>
            <button>Nouvelle demande</button>
            <img src={Image.src}></img>
            <button>Extraction Excel</button>
          </div>
        </>
      ) : (
        <>
          <div className={style.navCubes}>
            <div className={style.navTop}>
              <p>My requests</p>
              <p>My assignments</p>
            </div>
            <p>All requests</p>
          </div>
          <div className={style.sideBar}>
            <button>New request</button>
            <img src={Image.src}></img>
            <button>Excel extraction</button>
          </div>
        </>
      )}
    </main>
  );
}
