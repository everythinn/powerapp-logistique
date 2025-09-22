import AdminHeader from '@/app/adminHeader/adminHeader';
import AddUserForm from './addUserForm';
import style from './page.module.css';

export default function addUser(){
    return (
        <>
            <AdminHeader />
            <form className={style.userform}>
                <AddUserForm />
            </form>
        </>
    )
}