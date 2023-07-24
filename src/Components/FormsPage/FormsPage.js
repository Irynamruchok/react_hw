import React from 'react';
import UserCreateComponent from "../UserCreateComponent/UserCreateComponent";
import CommentCreateComponent from "../CommentCreateComponent/CommentCreateComponent";
import styles from './FormsPage.module.css'
const FormsPage = () => {
    return (
        <div className={styles.formWrapper}>
            <UserCreateComponent/>
            <CommentCreateComponent/>
        </div>
    );
};
export default FormsPage;