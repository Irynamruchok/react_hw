import React from 'react';
import UserCreateForm from "../UserCreateForm/UserCreateForm";
import styles from './UserCreatePage.module.css'
const UserCreatePage = () => {
    return (
        <div className={styles.wrapper}>
            <UserCreateForm/>
        </div>
    );
};
export default UserCreatePage;