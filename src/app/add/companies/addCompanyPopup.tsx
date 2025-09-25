'use client';
import { useRef } from 'react';
import { useTranslation } from '@/app/hooks/useTranslation';
import Popup from 'reactjs-popup';
import style from './addCompanyPopup.module.css';

export default function AddCompanyPopup() {
  const popupRef = useRef<any>(null);
  const t = useTranslation("addpage");

  function handleNameChange(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    popupRef.current?.close();
  }

  return (
    <>
      <Popup
      ref={popupRef}
      trigger={
      <div className={style.triggerContainer}> 
        <button className={style.trigger}>{t.addCompany}</button> 
      </div>}
      modal
      closeOnDocumentClick
      >
        <div className={style.overlay}>
          <div className={style.container}>
              <h2>{t.enterCompany}</h2>
              <form onSubmit={handleNameChange}>
              <label htmlFor="name" className={style.label}>
                  {t.name} :
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
                  {t.cancel}
                  </button>
                  <button type="submit" className={style.button}>
                  {t.save}
                  </button>
              </div>
              </form>
          </div>
        </div>
      </Popup>
    </>
  );
}
