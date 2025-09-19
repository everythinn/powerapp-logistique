'use client';
import { useLang } from '@/app/context/langContext';
import style from './partComponent.module.css';

export default function PartComponent(){
    const context = useLang();

    return (
        <>
            {context.lang === "FR" ? (
                <>
                    <div className={style.container}>
                        <div className={style.area}>
                            <label htmlFor='invoice' className={style.label}>Numéro facture :</label>
                            <p id='invoice' className={style.info}>420</p>
                            <label htmlFor='issueCode' className={style.label}>Type de litige :</label>
                            <p id='issueCode' className={style.info}>INR - part invoiced but not received</p>
                        </div>
                        <div className={style.area}>
                            <label htmlFor='partNumber' className={style.label}>Référence :</label>
                            <p id='partNumber' className={style.info}>25073</p>
                            <label htmlFor='unitPrice' className={style.label}>Prix UN :</label>
                            <p id='unitPrice' className={style.info}>60.54</p>
                            <label htmlFor='totalPrice' className={style.label}>Coût du litige :</label>
                            <p id='totalPrice' className={style.info}>30270</p>
                        </div>
                        <div className={style.area}>
                            <label htmlFor='quantity' className={style.label}>Quantité :</label>
                            <p id='quantity' className={style.info}>500</p>
                            <label htmlFor='currency' className={style.label}>Devise :</label>
                            <p id='currency' className={style.info}>€</p>
                        </div>
                    </div>
                    <div className={style.comment}>
                        <label htmlFor='comment' className={style.label}>Commentaire :</label>
                        <p id='comment' className={style.info}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </>
            ) : (
                <>
                    <div className={style.container}>
                        <div className={style.area}>
                            <label htmlFor='invoice' className={style.label}>Invoice number :</label>
                            <p id='invoice' className={style.info}>420</p>
                            <label htmlFor='issueCode' className={style.label}>Issue code  :</label>
                            <p id='issueCode' className={style.info}>INR - part invoiced but not received</p>
                        </div>
                        <div className={style.area}>
                            <label htmlFor='partNumber' className={style.label}>Part number  :</label>
                            <p id='partNumber' className={style.info}>25073</p>
                            <label htmlFor='unitPrice' className={style.label}>Unit price  :</label>
                            <p id='unitPrice' className={style.info}>60.54</p>
                            <label htmlFor='totalPrice' className={style.label}>Total price  :</label>
                            <p id='totalPrice' className={style.info}>30270</p>
                        </div>
                        <div className={style.area}>
                            <label htmlFor='quantity' className={style.label}>Quantity  :</label>
                            <p id='quantity' className={style.info}>500</p>
                            <label htmlFor='currency' className={style.label}>Currency  :</label>
                            <p id='currency' className={style.info}>€</p>
                        </div>
                    </div>
                    <div className={style.comment}>
                        <label htmlFor='comment' className={style.label}>Comment :</label>
                        <p id='comment' className={style.info}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </>
            )}
        </>
    )
}