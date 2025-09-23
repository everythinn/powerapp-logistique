'use client';
import { useTranslation } from '@/app/hooks/useTranslation';
import Link from 'next/link';
import AdminHeader from '@/app/adminHeader/adminHeader';
import UserCard from './userCard';
import style from './page.module.css';

export default function UserList(){
    const t = useTranslation("editpage");

    const users = [
        {
            slug: 'Adrian RUCINSKI',
            name: 'Adrian RUCINSKI',
            email: 'a.rucinski@ostroda-yacht.com.pl',
            society: 'Ostroda Yacht',
            isIssuer: true,
            isManager: true,
            isOrderingParty: true,
            isAccounting: false,
            isAdmin: false
        },
        {
            slug: 'Adrian RUCINSKI',
            name: 'Adrian RUCINSKI',
            email: 'a.rucinski@ostroda-yacht.com.pl',
            society: 'Ostroda Yacht',
            isIssuer: true,
            isManager: true,
            isOrderingParty: true,
            isAccounting: false,
            isAdmin: false
        },
        {
            slug: 'Adrian RUCINSKI',
            name: 'Adrian RUCINSKI',
            email: 'a.rucinski@ostroda-yacht.com.pl',
            society: 'Ostroda Yacht',
            isIssuer: true,
            isManager: true,
            isOrderingParty: true,
            isAccounting: false,
            isAdmin: false
        },
        {
            slug: 'Adrian RUCINSKI',
            name: 'Adrian RUCINSKI',
            email: 'a.rucinski@ostroda-yacht.com.pl',
            society: 'Ostroda Yacht',
            isIssuer: true,
            isManager: true,
            isOrderingParty: true,
            isAccounting: false,
            isAdmin: false
        },
        {
            slug: 'Adrian RUCINSKI',
            name: 'Adrian RUCINSKI',
            email: 'a.rucinski@ostroda-yacht.com.pl',
            society: 'Ostroda Yacht',
            isIssuer: true,
            isManager: true,
            isOrderingParty: true,
            isAccounting: false,
            isAdmin: false
        },
        {
            slug: 'Adrian RUCINSKI',
            name: 'Adrian RUCINSKI',
            email: 'a.rucinski@ostroda-yacht.com.pl',
            society: 'Ostroda Yacht',
            isIssuer: true,
            isManager: true,
            isOrderingParty: true,
            isAccounting: false,
            isAdmin: false
        },
        {
            slug: 'Adrian RUCINSKI',
            name: 'Adrian RUCINSKI',
            email: 'a.rucinski@ostroda-yacht.com.pl',
            society: 'Ostroda Yacht',
            isIssuer: true,
            isManager: true,
            isOrderingParty: true,
            isAccounting: false,
            isAdmin: false
        },
        {
            slug: 'Adrian RUCINSKI',
            name: 'Adrian RUCINSKI',
            email: 'a.rucinski@ostroda-yacht.com.pl',
            society: 'Ostroda Yacht',
            isIssuer: true,
            isManager: true,
            isOrderingParty: true,
            isAccounting: false,
            isAdmin: false
        },
        {
            slug: 'Adrian RUCINSKI',
            name: 'Adrian RUCINSKI',
            email: 'a.rucinski@ostroda-yacht.com.pl',
            society: 'Ostroda Yacht',
            isIssuer: true,
            isManager: true,
            isOrderingParty: true,
            isAccounting: false,
            isAdmin: false
        }
    ]

    return (
        <>
            <AdminHeader />
            <div className={style.triggerContainer}>
                <Link href='../add/user' className={style.link}>{t.addUser}</Link>
            </div>
            <ul className={style.requests}>
                {users.map((user, idx) => (
                    <li key={idx}>
                        <UserCard
                            slug={user.name}
                            name={user.name}
                            email={user.email}
                        />
                    </li>
                ))}
            </ul>
        </>
    )
}