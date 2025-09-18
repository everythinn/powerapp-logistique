'use client';
import { useLang } from '../context/langContext';
import style from './singleRequest.module.css';

export default function SingleRequest(){
    const context = useLang();

    return (
        <main className={style.request}>
            <h2 className={style.number}>WFL-6-578</h2>
            {context.lang === "FR" ? (
                <>
                    <div className={style.assignInfo}>
                        <p>Valene LOPEZ</p>
                        <p>Gestionnaire : Simon Thomas</p>
                        <p>Assigné à : Valene LOPEZ</p>
                    </div>
                    <div className={style.extraInfo}>
                        <p className={style.step}>Etape 1 - Transfert au gestionnaire</p>
                        <p>Société émettrice : SPBI</p>
                        <p>Société destinataire : SPBI</p>
                    </div>
                </>
            ) : (
                <>
                    <div className={style.assignInfo}>
                        <p>Valene LOPEZ</p>
                        <p>Manager : Simon Thomas</p>
                        <p>Assigned to : Valene LOPEZ</p>
                    </div>
                    <div className={style.extraInfo}>
                        <p className={style.step}>Step 1 - Transfer to manager</p>
                        <p>Issuing company : SPBI</p>
                        <p>Receiving company : SPBI</p>
                    </div>
                </>
            )}
        </main>
    )
}