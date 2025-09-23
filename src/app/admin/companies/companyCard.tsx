import CompanyPopup from './companyPopup';
import style from './companyCard.module.css';

interface CompanyCardProps {
    slug: string;
    name: string;
}

export default function userCard({ slug, name }: CompanyCardProps){

    return (
        <main className={style.card}>
            <div className={style.info}>
                <h2>{name}</h2>
            </div>
            <CompanyPopup slug={slug} name={name} />
        </main>
    )
}