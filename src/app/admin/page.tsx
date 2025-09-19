'use client';
import { useLang } from '../context/langContext';
import Image from '../../../public/admin_boat.jpg';
import AdminHeader from '../adminHeader/adminHeader';
import style from './page.module.css';
import Link from 'next/link';

export default function AdminBoard(){
    const context = useLang()

    return (
        <>
        <AdminHeader />
            <main className={style.board}>
                {context.lang === "FR" ? (
                    <div className={style.navCubes}>
                        <p className={style.link}>Demandes</p>
                        <Link href='./admin/companies' className={style.link}>Sociétés</Link>
                        <Link href='./admin/users' className={style.link}>Utilisateurs</Link>
                        <p className={style.link}>Types de litiges</p>
                    </div>
                ) : (
                    <div className={style.navCubes}>
                        <p className={style.link}>Requests</p>
                        <Link href='./admin/companies' className={style.link}>Companies</Link>
                        <Link href='./admin/users' className={style.link}>Users</Link>
                        <p className={style.link}>Issue codes</p>
                    </div>
                )}
                <div className={style.sideBar}>
                    <img src={Image.src}></img>
                    {context.lang === "FR" ? (
                        <button>Extraction Excel</button>
                    ) : (
                        <button>Excel extraction</button>
                    )}
                </div>
            </main>
        </>
    )
}
