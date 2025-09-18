'use client';
import { useLang } from "../context/langContext";
import style from "./adminHeader.module.css";

export default function AdminHeader() {
  const {lang, setToEn, setToFr} = useLang();

  return (
    <div className={style.header}>
      <div className={style.lang_slider}>
        <button
          className={`${style.langBtn} ${lang === "FR" ? style.active : ""}`}
          onClick={setToFr}
        >
          FR
        </button>
        <button
          className={`${style.langBtn} ${lang === "EN" ? style.active : ""}`}
          onClick={setToEn}
        >
          EN
        </button>
      </div>
      {lang === "FR" ? (
        <>
          <h1>LOGISTIQUE - ADMINISTRATION</h1>
          <p>Bienvenue utilisateur</p>
        </>
      ) : (
        <>
          <h1>LOGISTIC - ADMINISTRATION</h1>
          <p>Welcome username</p>
        </>
      )}
    </div>
  );
}
