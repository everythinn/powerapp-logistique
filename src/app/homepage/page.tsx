'use client';
import { handleExport } from "../excel-export/excel-export";
import { useTranslation } from '../hooks/useTranslation';
import Link from "next/link";
import Image from "../../../public/homepage_boat.jpg";
import style from "./page.module.css";

export default function Homepage() {
  const t = useTranslation("homepage");

  return (
    <main className={style.home}>
      <div className={style.navCubes}>
        <div className={style.navTop}>
          <Link href="./requests" className={style.navLink}>
            {t.requests}
          </Link>
          <p className={style.navLink}>{t.assignments}</p>
        </div>
        <p className={style.navLink}>{t.allRequests}</p>
      </div>
      <div className={style.sideBar}>
        <Link href="./add/request" className={style.sideLink}>
          {t.newRequest}
        </Link>
        <img src={Image.src} alt="Boat" />
        <button className={style.sideLink} onClick={handleExport}>
          {t.excel}
        </button>
      </div>
    </main>
  );
}
