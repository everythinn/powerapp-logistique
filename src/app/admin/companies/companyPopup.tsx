'use client';
import { useRef } from 'react';
import { useTranslation } from '@/app/hooks/useTranslation';
import Popup from 'reactjs-popup';
import style from './companyPopup.module.css';

interface CompanyPopupProps {
  slug: string;
  name: string;
}

export default function CompanyPopup({ slug, name }: CompanyPopupProps) {
  const popupRef = useRef<any>(null);
  const t = useTranslation("editpage");

  function handleNameChange(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    slug = name;
    popupRef.current?.close();
  }

  return (
    <>
      <Popup
      ref={popupRef}
      trigger={<button className={style.button}>{t.edit}</button>}
      modal
      closeOnDocumentClick
      >
        <div className={style.overlay}>
          <div className={style.container}>
              <h2>{t.editCompany}</h2>
              <form onSubmit={handleNameChange}>
              <label htmlFor="name" className={style.label}>
                  {t.newName} :
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
