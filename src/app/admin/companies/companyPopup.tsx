'use client';
import Popup from 'reactjs-popup';
import { useRef } from 'react';
import { useLang } from '@/app/context/langContext';
import style from './companyPopup.module.css';

interface CompanyPopupProps {
  slug: string;
  name: string;
}

export default function CompanyPopup({ slug, name }: CompanyPopupProps) {
  const popupRef = useRef<any>(null);
  const context = useLang();

  function handleNameChange(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    slug = name;
    popupRef.current?.close();
  }

  return (
    <>
      {context.lang === "FR" ? (
        <Popup
        ref={popupRef}
        trigger={<button className={style.button}>Modifier</button>}
        modal
        closeOnDocumentClick
        >
          <div className={style.overlay}>
            <div className={style.container}>
                <h2>Modifier le nom de société</h2>
                <form onSubmit={handleNameChange}>
                <label htmlFor="name" className={style.label}>
                    Nouveau nom :
                </label>
                <input
                    type="text"
                    id="name"
                    className={style.input}
                    defaultValue={name}
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
          trigger={<button className={style.button}>Edit</button>}
          modal
          closeOnDocumentClick
        >
          <div className={style.overlay}>
            <div className={style.container}>
                <h2>Edit company name</h2>
                <form onSubmit={handleNameChange}>
                <label htmlFor="name" className={style.label}>
                    New name :
                </label>
                <input
                    type="text"
                    id="name"
                    className={style.input}
                    defaultValue={name}
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
