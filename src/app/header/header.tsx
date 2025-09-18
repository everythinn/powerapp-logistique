"use client";
import { useLang } from "../context/langContext";
import style from "./header.module.css";

export default function Header() {
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
      {lang==="FR" ? (
        <div>
          <h1>LOGISTIQUE</h1>
          <p>Bienvenue utilisateur</p>
        </div>
      ) : (
        <div>
          <h1>LOGISTIC</h1>
          <p>Welcome username</p>
        </div>
      )}
    </div>
  );
}
