'use client'
import { useLang } from "@/app/context/langContext"
import style from './addUserForm.module.css'

export default function AddUserForm(){
    const context = useLang();

    return (
        <>
        {context.lang === "FR" ? (
                <>
                    <div className={style.inputs}>
                        <label htmlFor='name' className={style.label}>Prénom NOM :</label>
                        <input type='text' id='name' className={style.value} />
                        <label htmlFor='email' className={style.label}>Email :</label>
                        <input type='text' id='email' className={style.value}  />
                        <label htmlFor="company" className={style.label}>Société :</label>
                        <select id="company" name="company">
                            <option value="SPBI">SPBI</option>
                            <option value="Ostroda Yacht" selected>Ostroda Yacht</option>
                            <option value="GB Tunisie">GB Tunisie</option>
                        </select>
                    </div>
    {/*when BDD available, check how to default check checkboxes if values = true */}
                    <div className={style.checkboxes}>
                        <label htmlFor="issuer" className={style.label}>
                            Emetteur
                            <input type="checkbox" id="issuer" className={style.value}  />
                            <span className={style.slider}></span>
                        </label>
        
                        <label htmlFor="manager" className={style.label}>
                            Gestionnaire
                            <input type="checkbox" id="manager" className={style.value} />
                            <span className={style.slider}></span>
                        </label>
        
                        <label htmlFor="ordering" className={style.label}>
                            Donneur d'ordre
                            <input type="checkbox" id="ordering" className={style.value} />
                            <span className={style.slider}></span>
                        </label>
        
                        <label htmlFor="accounting" className={style.label}>
                            Comptabilité
                            <input type="checkbox" id="accounting" className={style.value} />
                            <span className={style.slider}></span>
                        </label>
        
                        <label htmlFor="admin" className={style.label}>
                            Administrateur
                            <input type="checkbox" id="admin" className={style.value} />
                            <span className={style.slider}></span>
                        </label>
                    </div>
                    <button type="submit" className={style.submit}>Enregistrer</button>
                </>
            ) : (
                <>
                    <div className={style.inputs}>
                        <label htmlFor='name' className={style.label}>First name NAME :</label>
                        <input type='text' id='name' className={style.value} />
                        <label htmlFor='email' className={style.label}>Email :</label>
                        <input type='text' id='email' className={style.value}  />
                        <label htmlFor="company" className={style.label}>Company :</label>
                        <select id="company" name="company">
                            <option value="SPBI">SPBI</option>
                            <option value="Ostroda Yacht" selected>Ostroda Yacht</option>
                            <option value="GB Tunisie">GB Tunisie</option>
                        </select>
                    </div>
    {/*when BDD available, check how to default check checkboxes if values = true */}
                    <div className={style.checkboxes}>
                        <label htmlFor="issuer" className={style.label}>
                            Sender
                            <input type="checkbox" id="issuer" className={style.value} />
                            <span className={style.slider}></span>
                        </label>

                        <label htmlFor="manager" className={style.label}>
                            Manager
                            <input type="checkbox" id="manager" className={style.value} />
                            <span className={style.slider}></span>
                        </label>

                        <label htmlFor="ordering" className={style.label}>
                            Ordering party
                            <input type="checkbox" id="ordering" className={style.value} />
                            <span className={style.slider}></span>
                        </label>

                        <label htmlFor="accounting" className={style.label}>
                            Accounting
                            <input type="checkbox" id="accounting" className={style.value} />
                            <span className={style.slider}></span>
                        </label>

                        <label htmlFor="admin" className={style.label}>
                            Administrator
                            <input type="checkbox" id="admin" className={style.value} />
                            <span className={style.slider}></span>
                        </label>
                    </div>
                    <button type="submit" className={style.submit}>Enregistrer</button>
                </>
            )}
        </>
    )
}