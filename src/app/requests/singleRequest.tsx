'use client';
import Link from 'next/link';
import { useLang } from '../context/langContext';
import style from './singleRequest.module.css';

type SingleRequestProps = {
    slug: string;
    number: string | number;
    creator: string;
    manager: string;
    assignedTo: string;
    step: string | number;
    issuingCompany: string;
    receivingCompany: string;
};

export default function SingleRequest({
    slug,
    number,
    creator,
    manager,
    assignedTo,
    step,
    issuingCompany,
    receivingCompany
}: SingleRequestProps) {
    const context = useLang();

    return (
        <main className={style.request}>
            <h2 className={style.number}>{number}</h2>
            {context.lang === "FR" ? (
                <>
                    <div className={style.assignInfo}>
                        <p>{creator}</p>
                        <p>Gestionnaire : {manager}</p>
                        <p>Assigné à {assignedTo}</p>
                    </div>
                    <div className={style.extraInfo}>
                        <p className={style.step}>Etape {step}</p>
                        <p>Société émettrice : {issuingCompany}</p>
                        <p>Société destinataire : {receivingCompany}</p>
                    </div>
                    <Link href={`/requests/${slug}`} className={style.link}>Détails</Link>
                </>
            ) : (
                <>
                    <div className={style.assignInfo}>
                        <p>{creator}</p>
                        <p>Manager : {manager}</p>
                        <p>Assigned to {assignedTo}</p>
                    </div>
                    <div className={style.extraInfo}>
                        <p className={style.step}>Step {step}</p>
                        <p>Issuing company : {issuingCompany}</p>
                        <p>Receiving company : {receivingCompany}</p>
                    </div>
                    <Link href={`/requests/${slug}`} className={style.link}>Details</Link>
                </>
            )}
        </main>
    )
}