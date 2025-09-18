'use client';
import { useLang } from '../context/langContext';
import Link from 'next/link';
import Image from '../../../public/homepage_boat.jpg';
import style from './page.module.css';

export default function Homepage() {
  const context = useLang();
  
  return (
    <main className={style.home}>
      {context.lang === "FR" ? (
        <>
          <div className={style.navCubes}>
            <div className={style.navTop}>
              <Link href='./requests' className={style.link}>Mes demandes</Link>
              <p className={style.link}>Mes assignations</p>
            </div>
            <p className={style.link}>Toutes les demandes</p>
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
              <Link href='./requests' className={style.link}>My requests</Link>
              <p className={style.link}>My assignments</p>
            </div>
            <p className={style.link}>All requests</p>
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
