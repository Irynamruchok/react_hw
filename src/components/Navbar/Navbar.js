import React from 'react';
import {AppRoutes} from "../../routing/AppRoutes";
import {Link} from "react-router-dom";
import styles from './navbar.module.css'
const Navbar = () => {
    const buttons = [
        {
            label: 'Users',
            route: AppRoutes.USERS
        },
        {
            label: 'Albums',
            route: AppRoutes.ALBUMS
        },
        {
            label: 'Posts',
            route: AppRoutes.POSTS
        }
    ]
    return (
        <div className={styles.wrapper}>
            {buttons.map((button, index) =>
            <Link key={index} to={button.route} className={styles.link}> {button.label} </Link>
            )}
        </div>
    );
};

export default Navbar;