'use client';
import Link from "next/link";
import { useLang } from "../context/langContext";
import style from "./header.module.css";

export default function AdminHeader() {
  const {lang, setToEn, setToFr} = useLang();


  function changeLang(){
    if (lang==="FR"){
      setToEn()
    } else setToFr()
  }

  return (
    <div className={style.header}>
      <div className={style.lang_slider}>
        <button
          className={`${style.langBtn} ${lang === "FR" ? style.active : ""}`}
          onClick={changeLang}
        >
          FR
        </button>
        <button
          className={`${style.langBtn} ${lang === "EN" ? style.active : ""}`}
          onClick={changeLang}
        >
          EN
        </button>
      </div>
      {lang === "FR" ? (
        <>
          <Link href='./' className={style.title}>LOGISTIQUE</Link>
          <p>Bienvenue utilisateur</p>
        </>
      ) : (
        <>
          <Link href='./' className={style.title}>LOGISTIC</Link>
          <p>Welcome username</p>
        </>
      )}
    </div>
  );
}
