"use client";
import { useState } from "react";
import style from "./header.module.css";

export default function Header() {
  const [lang, setLang] = useState("FR");

  return (
    <div className={style.header}>
      <div className={style.lang_slider}>
        <button
          className={`${style.langBtn} ${lang === "FR" ? style.active : ""}`}
          onClick={() => setLang("FR")}
        >
          FR
        </button>
        <button
          className={`${style.langBtn} ${lang === "EN" ? style.active : ""}`}
          onClick={() => setLang("EN")}
        >
          EN
        </button>
      </div>
      <h1>LOGISTIQUE</h1>
      <p>Welcome username</p>
    </div>
  );
}
