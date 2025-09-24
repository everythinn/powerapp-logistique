'use client';
import Link from 'next/link';
import { useTranslation } from '../hooks/useTranslation';
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
    const t = useTranslation("addpage");

    return (
        <main className={style.request}>
            <h2 className={style.number}>{number}</h2>
            <div className={style.assignInfo}>
                <p>{creator}</p>
                <p>{t.manager} : {manager}</p>
                <p>{t.assignedTo} {assignedTo}</p>
            </div>
            <div className={style.extraInfo}>
                <p className={style.step}>{t.step} {step}</p>
                <p>{t.issuingCompany} : {issuingCompany}</p>
                <p>{t.receivingCompany} : {receivingCompany}</p>
            </div>
            <Link href={`/requests/${slug}`} className={style.link}>Détails</Link>
        </main>
    )
}