import SingleRequest from './singleRequest';
import style from './page.module.css';
import Header from '../header/header';

export default function RequestGrid(){

    const requests = [
        {
            number: 'WFL-6-578',
            creator: 'Valene LOPEZ',
            manager: 'Simon THOMAS',
            assignedTo: 'Valene LOPEZ',
            step: '1 - Transfert au gestionnaire',
            issuingCompany: 'SPBI',
            receivingCompany: 'SPBI'
        },
        {
            number: 'WFL-6-578',
            creator: 'Valene LOPEZ',
            manager: 'Simon THOMAS',
            assignedTo: 'Valene LOPEZ',
            step: '1 - Transfert au gestionnaire',
            issuingCompany: 'SPBI',
            receivingCompany: 'SPBI'
        },
        {
            number: 'WFL-6-578',
            creator: 'Valene LOPEZ',
            manager: 'Simon THOMAS',
            assignedTo: 'Valene LOPEZ',
            step: '1 - Transfert au gestionnaire',
            issuingCompany: 'SPBI',
            receivingCompany: 'SPBI'
        },
        {
            number: 'WFL-6-578',
            creator: 'Valene LOPEZ',
            manager: 'Simon THOMAS',
            assignedTo: 'Valene LOPEZ',
            step: '1 - Transfert au gestionnaire',
            issuingCompany: 'SPBI',
            receivingCompany: 'SPBI'
        },
        {
            number: 'WFL-6-578',
            creator: 'Valene LOPEZ',
            manager: 'Simon THOMAS',
            assignedTo: 'Valene LOPEZ',
            step: '1 - Transfert au gestionnaire',
            issuingCompany: 'SPBI',
            receivingCompany: 'SPBI'
        },
        {
            number: 'WFL-6-578',
            creator: 'Valene LOPEZ',
            manager: 'Simon THOMAS',
            assignedTo: 'Valene LOPEZ',
            step: '1 - Transfert au gestionnaire',
            issuingCompany: 'SPBI',
            receivingCompany: 'SPBI'
        }
        
    ]

    return (
        <>
            <Header />
            <ul className={style.requests}>
                {requests.map((request, idx) => (
                    <li key={idx}>
                        <SingleRequest
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