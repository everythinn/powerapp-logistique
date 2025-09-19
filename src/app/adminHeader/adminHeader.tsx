'use client';
import { useLang } from "../context/langContext";
import Link from "next/link";
import style from "./adminHeader.module.css";

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
          <h1>LOGISTIQUE - ADMINISTRATION</h1>
          <Link href='../'>Bienvenue utilisateur</Link>
        </>
      ) : (
        <>
          <h1>LOGISTIC - ADMINISTRATION</h1>
          <Link href='../'>Welcome username</Link>
        </>
      )}
    </div>
  );
}
