import IssueCodePopup from './issueCodePopup';
import style from './issueCodeCard.module.css';

interface IssueCodeCardProps {
    slug: string;
    code: string;
}

export default function issueCodeCard({ slug, code }: IssueCodeCardProps){

    return (
        <main className={style.card}>
            <div className={style.info}>
                <h2>{code}</h2>
            </div>
            <IssueCodePopup slug={slug} code={code} />
        </main>
    )
}