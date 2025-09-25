import Header from '@/app/header/header'
import AddRequestForm from './addRequestForm'
import style from './page.module.css'

export default function AddRequest(){
    return (
        <>
            <Header />
            <form className={style.form}>
                <AddRequestForm />
            </form>
        </>
    )
}