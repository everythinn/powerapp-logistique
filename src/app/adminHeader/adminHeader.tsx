'use client';
import { useLang } from "../context/langContext";
import { useTranslation } from "../hooks/useTranslation";
import Link from "next/link";
import style from "./adminHeader.module.css";

export default function AdminHeader() {
  const {lang, setToEn, setToFr} = useLang();
  const t = useTranslation("header");


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
      <Link href='/admin' className={style.title}>{t.titleAdmin}</Link>
      <Link href='/'>{t.welcomeMessage}</Link>  {/*to be removed later, only for navigation in testing*/}
    </div>
  );
}
