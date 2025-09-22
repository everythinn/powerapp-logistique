'use client';
import Popup from 'reactjs-popup';
import { useRef } from 'react';
import { useLang } from '@/app/context/langContext';
import style from './addCompanyPopup.module.css';

export default function AddCompanyPopup() {
  const popupRef = useRef<any>(null);
  const context = useLang();

  function handleNameChange(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    popupRef.current?.close();
  }

  return (
    <>
      {context.lang === "FR" ? (
        <Popup
        ref={popupRef}
        trigger={
        <div className={style.triggerContainer}> 
          <button className={style.trigger}>Ajouter une société</button> 
        </div>}
        modal
        closeOnDocumentClick
        >
          <div className={style.overlay}>
            <div className={style.container}>
                <h2>Entrez le nom de société</h2>
                <form onSubmit={handleNameChange}>
                <label htmlFor="name" className={style.label}>
                    Nom :
                </label>
                <input
                    type="text"
                    id="name"
                    className={style.input}
                />
                <div className={style.actions}>
                    <button
                    type="button"
                    className={style.button}
                    onClick={() => popupRef.current?.close()}
                    >
                    Annuler
                    </button>
                    <button type="submit" className={style.button}>
                    Enregistrer
                    </button>
                </div>
                </form>
            </div>
          </div>
        </Popup>
      ) : (
        <Popup
          ref={popupRef}
          trigger={
            <div className={style.triggerContainer}> 
              <button className={style.trigger}>Add company</button> 
            </div>}
          modal
          closeOnDocumentClick
        >
          <div className={style.overlay}>
            <div className={style.container}>
                <h2>Enter company name</h2>
                <form onSubmit={handleNameChange}>
                <label htmlFor="name" className={style.label}>
                    Name :
                </label>
                <input
                    type="text"
                    id="name"
                    className={style.input}
                />
                <div className={style.actions}>
                    <button
                    type="button"
                    className={style.button}
                    onClick={() => popupRef.current?.close()}
                    >
                    Cancel
                    </button>
                    <button type="submit" className={style.button}>
                    Save
                    </button>
                </div>
                </form>
            </div>
          </div>
        </Popup>
      )}
    </>
  );
}
