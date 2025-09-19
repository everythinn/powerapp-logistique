'use client';
import Popup from 'reactjs-popup';
import { useRef } from 'react';
import { useLang } from '@/app/context/langContext';
import style from './issueCodePopup.module.css';

interface IssueCodesPopupProps {
  slug: string;
  code: string;
}

export default function CompanyPopup({ slug, code }: IssueCodesPopupProps) {
  const popupRef = useRef<any>(null);
  const context = useLang();

  function handleNameChange(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    slug = slug;
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
                <h2>Modifier le type de litige</h2>
                <form onSubmit={handleNameChange}>
                <label htmlFor="code" className={style.label}>
                    Nouveau nom :
                </label>
                <input
                    type="text"
                    id="code"
                    className={style.input}
                    defaultValue={code}
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
                <h2>Edit issue code</h2>
                <form onSubmit={handleNameChange}>
                <label htmlFor="code" className={style.label}>
                    New name :
                </label>
                <input
                    type="text"
                    id="code"
                    className={style.input}
                    defaultValue={code}
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
