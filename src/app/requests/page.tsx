import SingleRequest from './singleRequest';
import style from './page.module.css';
import Header from '../header/header';

export const requests = [
    {
        slug: 'WFL-6-578',
        number: 'WFL-6-578',
        creator: 'Valene LOPEZ',
        manager: 'Simon THOMAS',
        assignedTo: 'Valene LOPEZ',
        step: '1 - Transfert au gestionnaire',
        issuingCompany: 'SPBI',
        receivingCompany: 'SPBI'
    },
    {
        slug: 'WFL-2-790',
        number: 'WFL-2-790',
        creator: 'Valene LOPEZ',
        manager: 'Julien DULOU',
        assignedTo: 'Julien DULOU',
        step: '5 - Validation finale',
        issuingCompany: 'GB Portugal',
        receivingCompany: 'SPBI'
    },
    {
        slug: 'WFL-6-578',
        number: 'WFL-6-578',
        creator: 'Valene LOPEZ',
        manager: 'Simon THOMAS',
        assignedTo: 'Valene LOPEZ',
        step: '1 - Transfert au gestionnaire',
        issuingCompany: 'SPBI',
        receivingCompany: 'SPBI'
    },
    {
        slug: 'WFL-6-578',
        number: 'WFL-6-578',
        creator: 'Valene LOPEZ',
        manager: 'Simon THOMAS',
        assignedTo: 'Valene LOPEZ',
        step: '1 - Transfert au gestionnaire',
        issuingCompany: 'SPBI',
        receivingCompany: 'SPBI'
    },
    {
        slug: 'WFL-6-578',
        number: 'WFL-6-578',
        creator: 'Valene LOPEZ',
        manager: 'Simon THOMAS',
        assignedTo: 'Valene LOPEZ',
        step: '1 - Transfert au gestionnaire',
        issuingCompany: 'SPBI',
        receivingCompany: 'SPBI'
    },
    {
        slug: 'WFL-6-578',
        number: 'WFL-6-578',
        creator: 'Valene LOPEZ',
        manager: 'Simon THOMAS',
        assignedTo: 'Valene LOPEZ',
        step: '1 - Transfert au gestionnaire',
        issuingCompany: 'SPBI',
        receivingCompany: 'SPBI'
    }
    
]

export default function RequestGrid(){

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