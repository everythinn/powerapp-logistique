'use client';
import { useTranslation } from "@/app/hooks/useTranslation";
import style from './formContent.module.css';

type UserModifFormProps = {
    slug: string;
    name: string;
    email: string;
    company: string;
    isIssuer: boolean;
    isManager: boolean;
    isOrderingParty: boolean;
    isAccounting: boolean;
    isAdmin: boolean;
};

export default function FormContent({slug, name, email, company, isIssuer, isManager, isOrderingParty, isAccounting, isAdmin}: UserModifFormProps): React.ReactElement {
    const t = useTranslation("addpage");
    
    return (
        <>
            <div className={style.inputs}>
                <label htmlFor='name' className={style.label}>{t.nameSurname} :</label>
                <input type='text' id='name' className={style.value} value={name} />
                <label htmlFor='email' className={style.label}>{t.email} :</label>
                <input type='text' id='email' className={style.value} value={email} />
                <label htmlFor="company" className={style.label}>{t.company} :</label>
                <select id="company" name="company">
                    <option value="SPBI">SPBI</option>
                    <option value="Ostroda Yacht" selected>Ostroda Yacht</option>
                    <option value="GB Tunisie">GB Tunisie</option>
                </select>
            </div>
{/*when BDD available, check how to default check checkboxes if values = true */}
            <div className={style.checkboxes}>
                <label htmlFor="issuer" className={style.label}>
                    {t.isIssuer}
                    <input type="checkbox" id="issuer" className={style.value} defaultChecked={isIssuer} />
                    <span className={style.slider}></span>
                </label>

                <label htmlFor="manager" className={style.label}>
                    {t.isManager}
                    <input type="checkbox" id="manager" className={style.value} defaultChecked={isManager} />
                    <span className={style.slider}></span>
                </label>

                <label htmlFor="ordering" className={style.label}>
                    {t.isOrderingParty}
                    <input type="checkbox" id="ordering" className={style.value} defaultChecked={isOrderingParty} />
                    <span className={style.slider}></span>
                </label>

                <label htmlFor="accounting" className={style.label}>
                    {t.isAccounting}
                    <input type="checkbox" id="accounting" className={style.value} defaultChecked={isAccounting} />
                    <span className={style.slider}></span>
                </label>

                <label htmlFor="admin" className={style.label}>
                    {t.isAdmin}
                    <input type="checkbox" id="admin" className={style.value} defaultChecked={isAdmin} />
                    <span className={style.slider}></span>
                </label>
            </div>
            <button type="submit" className={style.submit}>{t.save}</button>
        </>
    )
}