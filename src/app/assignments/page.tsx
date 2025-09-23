import { requests } from '../requests/page';
import Header from '@/app/header/header';
import SingleRequest from '../requests/singleRequest';
import style from './page.module.css';

export default function AllRequests(){

    return (
        <>
            <Header />
            <ul className={style.requests}>
                {requests.map((request, idx) => (
                    <li key={idx}>
                        <SingleRequest
                            slug={request.slug}
                            number={request.number}
                            creator={request.creator}
                            manager={request.manager}
                            assignedTo={request.assignedTo}
                            step={request.step}
                            issuingCompany={request.issuingCompany}
                            receivingCompany={request.receivingCompany}
                        />
                    </li>
                ))}
            </ul>
        </>
    )
}