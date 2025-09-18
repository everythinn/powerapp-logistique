'use client';
import { useLang } from '../context/langContext';
import Image from '../../../public/admin_boat.jpg';
import style from './page.module.css';

export default function AdminBoard(){
    const context = useLang()

    return (
        <main className={style.board}>
            {context.lang === "FR" ? (
                <div className={style.navCubes}>
                    <p>Demandes</p>
                    <p>Sociétés</p>
                    <p>Utilisateurs</p>
                    <p>Types de litiges</p>
                </div>
            ) : (
                <div className={style.navCubes}>
                    <p>Requests</p>
                    <p>Companies</p>
                    <p>Users</p>
                    <p>Issue codes</p>
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
    )
}
