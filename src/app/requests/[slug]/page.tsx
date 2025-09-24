'use client';
import { useTranslation } from '@/app/hooks/useTranslation';
import Header from '../../header/header'
import PartComponent from './partComponent';
import style from './page.module.css';

export default function Request(){
    const t = useTranslation("addpage");

    return (
        <>
            <Header />
            <h1 className={style.title}>WFL-6-578</h1>
            <div className={style.container}>
                <div className={style.area}>
                    <label htmlFor='creator' className={style.label}>{t.creator} : </label>
                    <p id='creator' className={style.info}>Robert MARKIEWICZ</p>
                    <label htmlFor='manager' className={style.label}>{t.manager} :</label>
                    <p id='manager' className={style.info}>Elizabete FAGUNDES DOS SANTOS</p>
                    <label htmlFor='orderingParty' className={style.label}>{t.orderingParty} :</label>
                    <p id='orderingParty' className={style.info}>Elizabete FAGUNDES DOS SANTOS</p>
                </div>
                <div className={style.area}>
                    <label htmlFor='receptionDate' className={style.label}>{t.receptionDate} :</label>
                    <p id='receptionDate' className={style.info}>15/09/2025</p>
                    <label htmlFor='arrivalDate' className={style.label}>{t.arrivalDate} :</label>
                    <p id='arrivalDate' className={style.info}>16/09/2025</p>
                    <label htmlFor='transportation' className={style.label}>{t.transport} :</label>
                    <p id='transportation' className={style.info}>LHOS-SHK-R2531B</p>
                </div>
                <div className={style.area}>
                    <label htmlFor='issuing' className={style.label}>{t.issuingCompany} :</label>
                    <p id='issuing' className={style.info}>SPBI</p>
                    <label htmlFor='receiving' className={style.label}>{t.receivingCompany} :</label>
                    <p id='receiving' className={style.info}>SPBI</p>
                </div>
            </div>
            <PartComponent />
        </>
    )
}