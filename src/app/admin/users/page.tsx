'use client';
import { useLang } from '@/app/context/langContext';
import UserCard from './userCard';
import style from './page.module.css';
import AdminHeader from '@/app/adminHeader/adminHeader';

export default function UserList(){
    const context = useLang();

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