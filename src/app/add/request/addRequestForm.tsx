'use client';
import { useLang } from '@/app/context/langContext';
import style from './addRequestForm.module.css';

export default function AddRequestForm(){
    const context = useLang();

    return (
        <>
            {context.lang === 'FR' ? (  
                <main  className={style.center}>
                    <div className={style.container}>
                        <div className={style.area}>
                            <label htmlFor='creator' className={style.label}>Créateur : </label><br/>
                            <input id='creator' className={style.info}></input><br/>
                            <label htmlFor='manager' className={style.label}>Gestionnaire :</label><br/>
                            <input id='manager' className={style.info}></input><br/>
                        </div>
                        <div className={style.area}>
                            <label htmlFor='receptionDate' className={style.label}>Date du contrôle de réception :</label><br/>
                            <input id='receptionDate' type='date' className={style.info}></input><br/>
                            <label htmlFor='transportation' className={style.label}>Ref transport # :</label><br/>
                            <input id='transportation' className={style.info}></input><br/>
                        </div>
                        <div className={style.area}>
                            <label htmlFor='issuing' className={style.label}>Société émettrice :</label><br/>
                            <input id='issuing' className={style.info}></input><br/>
                        </div>
                    </div>
                    <div className={style.container}>
                        <div className={style.area}>
                            <label htmlFor='invoice' className={style.label}>Numéro facture :</label><br/>
                            <input id='invoice' type='number' className={style.info}></input><br/>
                            <label htmlFor='issueCode' className={style.label}>Type de litige :</label><br/>
                            <input id='issueCode' className={style.info}></input><br/>
                        </div>
                        <div className={style.area}>
                            <label htmlFor='partNumber' className={style.label}>Référence :</label><br/>
                            <input id='partNumber' className={style.info}></input><br/>
                            <label htmlFor='unitPrice' className={style.label}>Prix UN :</label><br/>
                            <input id='unitPrice' type='number' className={style.info}></input><br/>
{/*add handler for dynamic price update + REMOVE INPUT !!!!*/}
                            <label htmlFor='totalPrice' className={style.label}>Coût du litige :</label><br/>
                            <input id='totalPrice' type='number' className={style.info}></input><br/>
                        </div>
                        <div className={style.area}>
                            <label htmlFor='quantity' className={style.label}>Quantité :</label><br/>
                            <input id='quantity' type='number' className={style.info}></input><br/>
                            <label htmlFor='currency' className={style.label}>Devise :</label><br/>
                            <select id='currency' className={style.info}>
                                <option value="€">€</option>
                                <option value="$">$</option>
                            </select><br/>
                        </div>
                    </div>
                    <div className={style.comment}>
                        <label htmlFor='comment' className={style.label}>Commentaire :</label><br/>
                        <textarea rows={2} id='comment' className={style.info}></textarea><br/>
                    </div>
                    <div className={style.button}>
                        <button className={style.submit} type='submit'>Envoyer la demande</button>
                    </div>
                </main>
            ) : (
// Add english version when fr is done
                <h2 className={style.title}>Add new request</h2>
            )}
        </>
    )
}