'use client';
import { useRef } from 'react';
import { useTranslation } from '@/app/hooks/useTranslation';
import Popup from 'reactjs-popup';
import style from './issueCodePopup.module.css';

interface IssueCodesPopupProps {
  slug: string;
  code: string;
}

export default function CompanyPopup({ slug, code }: IssueCodesPopupProps) {
  const popupRef = useRef<any>(null);
  const t = useTranslation("editpage");

  function handleNameChange(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    slug = slug;
    popupRef.current?.close();
  }

  return (
    <>
      <Popup
      ref={popupRef}
      trigger={<button className={style.button}>Modifier</button>}
      modal
      closeOnDocumentClick
      >
        <div className={style.overlay}>
          <div className={style.container}>
              <h2>{t.editIssueCode}</h2>
              <form onSubmit={handleNameChange}>
              <label htmlFor="code" className={style.label}>
                  {t.newName} :
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
