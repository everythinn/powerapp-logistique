'use client';
import { usePathname, useRouter } from "next/navigation";
import { useLang } from "../context/langContext";
import { useTranslation } from "../hooks/useTranslation";
import Link from "next/link";
import style from "./header.module.css";

export default function AdminHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const { lang, setToEn, setToFr } = useLang();
  const t = useTranslation("header");

  function changeLang() {
    if (lang === "FR") {
      setToEn();
    } else {
      setToFr();
    }
  }

  // Hide button if homepage OR admin
  const hideBackButton = pathname === "/" || pathname === "/admin";

  function handleBack() {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/"); // fallback to homepage
    }
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

      {!hideBackButton && (
        <button onClick={handleBack} className={style.back}>
          {t.back}
        </button>
      )}

      <Link href="/" className={style.title}>{t.title}</Link>
      <Link href="/admin">{t.welcomeMessage}</Link> {/* temp nav */}
    </div>
  );
}
