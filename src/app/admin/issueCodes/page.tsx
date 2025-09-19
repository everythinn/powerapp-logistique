'use client';
import { useLang } from '@/app/context/langContext';
import IssueCodeCard from './issueCodeCard';
import AdminHeader from '@/app/adminHeader/adminHeader';
import style from './page.module.css';

export default function IssueCodeList(){
    const context = useLang();

    const codes = [
        {
            slug: 'INR',
            code: 'INR - part invoiced but not received'
        },
        {
            slug: 'DNI',
            code: 'DNI - part delivered but not invoiced'
        },
        {
            slug: 'BR',
            code: 'BR - broken during transportation'
        }
    ]
    
    return (
        <>
            <AdminHeader />
            <ul className={style.codes}>
                {codes.map((code, idx) => (
                    <li key={idx}>
                        <IssueCodeCard
                            slug={code.slug}
                            code={code.code}
                        />
                    </li>
                ))}
            </ul>
        </>
    )
}