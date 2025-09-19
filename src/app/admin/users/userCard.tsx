import Link from 'next/link';
import style from './userCard.module.css';

interface UserCardProps {
    slug: string;
    name: string;
    email: string;
}

export default function userCard({ slug, name, email }: UserCardProps){

    return (
        <main className={style.card}>
            <div className={style.info}>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
            <Link href={`/admin/users/${slug}`} className={style.link}>Edit</Link>
        </main>
    )
}