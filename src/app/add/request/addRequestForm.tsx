'use client';
import { useTranslation } from '@/app/hooks/useTranslation';
import style from './addRequestForm.module.css';

export default function AddRequestForm(){
    const t = useTranslation("addpage");

    return (
        <>
            <main  className={style.center}>
                <div className={style.container}>
                    <div className={style.area}>
                        <label htmlFor='creator' className={style.label}>{t.creator} : </label><br/>
                        <input id='creator' className={style.info}></input><br/>
                        <label htmlFor='manager' className={style.label}>{t.manager} :</label><br/>
                        <input id='manager' className={style.info}></input><br/>
                    </div>
                    <div className={style.area}>
                        <label htmlFor='receptionDate' className={style.label}>{t.receptionDate} :</label><br/>
                        <input id='receptionDate' type='date' className={style.info}></input><br/>
                        <label htmlFor='transportation' className={style.label}>{t.transport} :</label><br/>
                        <input id='transportation' className={style.info}></input><br/>
                    </div>
                    <div className={style.area}>
                        <label htmlFor='issuing' className={style.label}>{t.issuingCompany} :</label><br/>
                        <input id='issuing' className={style.info}></input><br/>
                    </div>
                </div>
                <div className={style.container}>
                    <div className={style.area}>
                        <label htmlFor='invoice' className={style.label}>{t.invoice} :</label><br/>
                        <input id='invoice' type='number' className={style.info}></input><br/>
                        <label htmlFor='issueCode' className={style.label}>{t.issueCode} :</label><br/>
                        <input id='issueCode' className={style.info}></input><br/>
                    </div>
                    <div className={style.area}>
                        <label htmlFor='partNumber' className={style.label}>{t.partNumber} :</label><br/>
                        <input id='partNumber' className={style.info}></input><br/>
                        <label htmlFor='unitPrice' className={style.label}>{t.unitPrice} :</label><br/>
                        <input id='unitPrice' type='number' className={style.info}></input><br/>
{/*add handler for dynamic price update + REMOVE INPUT !!!!*/}
                        <label htmlFor='totalPrice' className={style.label}>{t.totalPrice} :</label><br/>
                        <input id='totalPrice' type='number' className={style.info}></input><br/>
                    </div>
                    <div className={style.area}>
                        <label htmlFor='quantity' className={style.label}>{t.quantity} :</label><br/>
                        <input id='quantity' type='number' className={style.info}></input><br/>
                        <label htmlFor='currency' className={style.label}>{t.currency} :</label><br/>
                        <select id='currency' className={style.info}>
                            <option value="€">€</option>
                            <option value="$">$</option>
                        </select><br/>
                    </div>
                </div>
                <div className={style.comment}>
                    <label htmlFor='comment' className={style.label}>{t.comment} :</label><br/>
                    <textarea rows={2} id='comment' className={style.info}></textarea><br/>
                </div>
                <div className={style.button}>
                    <button className={style.submit} type='submit'>{t.submitRequest}</button>
                </div>
            </main>
        </>
    )
}