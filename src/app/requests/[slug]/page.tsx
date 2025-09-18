import Header from '../../header/header'
import style from './page.module.css';

export default function Request(){
    return (
        <>
            <Header />
{/*TODO : english toggle*/}
            <h1 className={style.title}>WFL-6-578</h1>
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

{/*TODO : isolate following div in component to repeat if needed*/}

            <div className={style.container}>
                <div className={style.area}>
                    <label htmlFor='invoice' className={style.label}>Invoice number :</label>
                    <p id='invoice' className={style.info}>1420</p>
                    <label htmlFor='issueCode' className={style.label}>Issue code 1 :</label>
                    <p id='issueCode' className={style.info}>INR - part invoiced but not received</p>
                </div>
                <div className={style.area}>
                    <label htmlFor='partNumber' className={style.label}>Part number 1 :</label>
                    <p id='partNumber' className={style.info}>125073</p>
                    <label htmlFor='unitPrice' className={style.label}>Unit price 1 :</label>
                    <p id='unitPrice' className={style.info}>60.54</p>
                    <label htmlFor='totalPrice' className={style.label}>Total price 1 :</label>
                    <p id='totalPrice' className={style.info}>30270</p>
                </div>
                <div className={style.area}>
                    <label htmlFor='quantity' className={style.label}>Quantity 1 :</label>
                    <p id='quantity' className={style.info}>500</p>
                    <label htmlFor='currency' className={style.label}>Issue code 1 :</label>
                    <p id='currency' className={style.info}>€</p>
                </div>
            </div>
            <div className={style.comment}>
                <label htmlFor='comment' className={style.label}>Comment :</label>
                <p id='comment' className={style.info}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </>
    )
}