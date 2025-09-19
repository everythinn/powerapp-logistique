'use client';
import { useLang } from '@/app/context/langContext';
import Header from '../../header/header'
import PartComponent from './partComponent';
import style from './page.module.css';

export default function Request(){
    const context = useLang();

    return (
        <>
            <Header />
            <h1 className={style.title}>WFL-6-578</h1>
            {context.lang === "FR" ? (
                <div className={style.container}>
                    <div className={style.area}>
                        <label htmlFor='creator' className={style.label}>Créateur : </label>
                        <p id='creator' className={style.info}>Robert MARKIEWICZ</p>
                        <label htmlFor='manager' className={style.label}>Gestionnaire :</label>
                        <p id='manager' className={style.info}>Elizabete FAGUNDES DOS SANTOS</p>
                        <label htmlFor='orderingParty' className={style.label}>Donneur d'ordres :</label>
                        <p id='orderingParty' className={style.info}>Elizabete FAGUNDES DOS SANTOS</p>
                    </div>
                    <div className={style.area}>
                        <label htmlFor='receptionDate' className={style.label}>Date du contrôle de réception :</label>
                        <p id='receptionDate' className={style.info}>15/09/2025</p>
                        <label htmlFor='arrivalDate' className={style.label}>Date d'arrivée à cette étape :</label>
                        <p id='arrivalDate' className={style.info}>16/09/2025</p>
                        <label htmlFor='transportation' className={style.label}>Ref transport # :</label>
                        <p id='transportation' className={style.info}>LHOS-SHK-R2531B</p>
                    </div>
                    <div className={style.area}>
                        <label htmlFor='issuing' className={style.label}>Société émettrice :</label>
                        <p id='issuing' className={style.info}>SPBI</p>
                        <label htmlFor='receiving' className={style.label}>Société destinataire :</label>
                        <p id='receiving' className={style.info}>SPBI</p>
                    </div>
                </div>
            ) : (
                <>
                    <div className={style.container}>
                        <div className={style.area}>
                            <label htmlFor='creator' className={style.label}>Creator :</label>
                            <p id='creator' className={style.info}>Robert MARKIEWICZ</p>
                            <label htmlFor='manager' className={style.label}>Manager :</label>
                            <p id='manager' className={style.info}>Elizabete FAGUNDES DOS SANTOS</p>
                            <label htmlFor='orderingParty' className={style.label}>Ordering party :</label>
                            <p id='orderingParty' className={style.info}>Elizabete FAGUNDES DOS SANTOS</p>
                        </div>
                        <div className={style.area}>
                            <label htmlFor='receptionDate' className={style.label}>Reception date :</label>
                            <p id='receptionDate' className={style.info}>15/09/2025</p>
                            <label htmlFor='arrivalDate' className={style.label}>Date of arrival at this stage :</label>
                            <p id='arrivalDate' className={style.info}>16/09/2025</p>
                            <label htmlFor='transportation' className={style.label}>Ref transportation # :</label>
                            <p id='transportation' className={style.info}>LHOS-SHK-R2531B</p>
                        </div>
                        <div className={style.area}>
                            <label htmlFor='issuing' className={style.label}>Issuing company :</label>
                            <p id='issuing' className={style.info}>SPBI</p>
                            <label htmlFor='receiving' className={style.label}>Receiving company :</label>
                            <p id='receiving' className={style.info}>SPBI</p>
                        </div>
                    </div>
                </>
            )}
            <PartComponent />
        </>
    )
}