'use client'
import { useTranslation } from "@/app/hooks/useTranslation";
import style from './addUserForm.module.css'

export default function AddUserForm(){
    const t = useTranslation("addpage");

    return (
        <>
            <div className={style.inputs}>
                <label htmlFor='name' className={style.label}>{t.nameSurname} :</label>
                <input type='text' id='name' className={style.value} />
                <label htmlFor='email' className={style.label}>{t.email} :</label>
                <input type='text' id='email' className={style.value}  />
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
                    <input type="checkbox" id="issuer" className={style.value}  />
                    <span className={style.slider}></span>
                </label>

                <label htmlFor="manager" className={style.label}>
                    {t.isManager}
                    <input type="checkbox" id="manager" className={style.value} />
                    <span className={style.slider}></span>
                </label>

                <label htmlFor="ordering" className={style.label}>
                    {t.isOrderingParty}
                    <input type="checkbox" id="ordering" className={style.value} />
                    <span className={style.slider}></span>
                </label>

                <label htmlFor="accounting" className={style.label}>
                    {t.isAccounting}
                    <input type="checkbox" id="accounting" className={style.value} />
                    <span className={style.slider}></span>
                </label>

                <label htmlFor="admin" className={style.label}>
                    {t.isAdmin}
                    <input type="checkbox" id="admin" className={style.value} />
                    <span className={style.slider}></span>
                </label>
            </div>
            <button type="submit" className={style.submit}>{t.submitUser}</button>
        </>
    )
}