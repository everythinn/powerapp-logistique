'use client';
import { useLang } from '@/app/context/langContext';
import AdminHeader from '@/app/adminHeader/adminHeader';
import FormContent from './formContent';
import style from './page.module.css';

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

export default function UserModifForm({slug, name, email, company, isIssuer, isManager, isOrderingParty, isAccounting, isAdmin}: UserModifFormProps){
    const context = useLang();

    return (
        <>
            <AdminHeader />
            <form className={style.userform}>
                <FormContent slug={slug} name={name} email={email} company={company} isIssuer={isIssuer} isManager={isManager} isOrderingParty={isOrderingParty} isAccounting={isAccounting} isAdmin={isAdmin} />
            </form>
        </>
    )
}