'use client';
import { useLang } from '@/app/context/langContext';
import CompanyCard from './companyCard';
import AdminHeader from '@/app/adminHeader/adminHeader';
import style from './page.module.css';
import AddCompanyPopup from '@/app/add/companies/addCompanyPopup';

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
            <AddCompanyPopup />
            <ul className={style.companies}>
                {companies.map((company, idx) => (
                    <li key={idx}>
                        <CompanyCard
                            slug={company.name}
                            name={company.name}
                        />
                    </li>
                ))}
            </ul>
        </>
    )
}