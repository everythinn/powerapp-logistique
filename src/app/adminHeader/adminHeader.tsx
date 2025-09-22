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
          <Link href='/admin' className={style.title}>LOGISTIQUE - ADMINISTRATION</Link>
          <Link href='/'>Bienvenue utilisateur</Link>  {/*to be removed later, only for navigation in testing*/}
        </>
      ) : (
        <>
          <Link href='/admin' className={style.title}>LOGISTIC - ADMINISTRATION</Link>
          <Link href='/'>Welcome username</Link>  {/*to be removed later, only for navigation in testing*/}
        </>
      )}
    </div>
  );
}
