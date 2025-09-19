'use client';
import { useLang } from '@/app/context/langContext';
import CompanyCard from './companyCard';
import AdminHeader from '@/app/adminHeader/adminHeader';
import style from './page.module.css';

export default function CompaniesList(){
    const context = useLang();

    const companies = [
        {
            slug: 'SPBI',
            name: 'SPBI'
        },
        {
            slug: 'Ostroda Yacht',
            name: 'Ostroda Yacht'
        },
        {
            slug: 'Delphia Yacht',
            name: 'Delphia Yacht'
        }
    ]
    
    return (
        <>
            <AdminHeader />
            <ul className={style.companies}>
                {companies.map((user, idx) => (
                    <li key={idx}>
                        <CompanyCard
                            slug={user.name}
                            name={user.name}
                        />
                    </li>
                ))}
            </ul>
        </>
    )
}