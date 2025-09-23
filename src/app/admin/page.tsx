'use client';
import { handleExport } from '../excel-export/excel-export';
import { useTranslation } from '../hooks/useTranslation';
import Image from '../../../public/admin_boat.jpg';
import AdminHeader from '../adminHeader/adminHeader';
import style from './page.module.css';
import Link from 'next/link';

export default function AdminBoard(){
    const t = useTranslation("adminpage")

    return (
        <>
        <AdminHeader />
            <main className={style.board}>
                <div className={style.navCubes}>
                    <p className={style.link}>{t.requests}</p>
                    <Link href='./admin/companies' className={style.link}>{t.companies}</Link>
                    <Link href='./admin/users' className={style.link}>{t.users}</Link>
                    <Link href='./admin/issueCodes' className={style.link}>{t.issueCodes}</Link>
                </div>
                <div className={style.sideBar}>
                    <img src={Image.src}></img>
                    <button className={style.excel} onClick={handleExport}>{t.excel}</button>
                </div>
            </main>
        </>
    )
}
