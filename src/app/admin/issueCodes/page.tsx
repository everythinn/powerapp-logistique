'use client';
import { useEffect, useState } from "react";
import { useLang } from "@/app/context/langContext";
import AdminHeader from "@/app/adminHeader/adminHeader";
import IssueCodeCard from "./issueCodeCard";
import AddIssueCodePopup from "@/app/add/issueCode/addIssueCodePopup";
import style from "./page.module.css";

interface LitigeInfo {
    id: bigint;
    nom: string;
}

export default function IssueCodeList() {
  const context = useLang();
  const [codes, setCodes] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/admin/issueCodes")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setCodes(data);
        } else if (Array.isArray(data?.data)) {
          setCodes(data.data);
        } else {
          console.error("Unexpected API response:", data);
          setCodes([]);
        }
      })
      .catch((err) => {
        console.error("Failed to fetch issue codes:", err);
        setCodes([]);
      });
  }, []);
  

  return (
    <>
        <AdminHeader />
        <AddIssueCodePopup />
        {codes.length === 0 ? (
            <p className={style.error}>No issue codes found or failed to load.</p>
        ) : (
            <ul className={style.codes}>
            {codes.map((code, idx) => (
                <li key={idx}>
                <IssueCodeCard slug={code.slug} code={code.code} />
                </li>
            ))}
            </ul>
        )}
    </>
  );
}
