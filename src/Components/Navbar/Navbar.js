import React from 'react';
import {AppRoutes} from "../Routing/AppRoutes";
import {Link} from "react-router-dom";
import styles from './Navbar.module.css'
const Navbar = () => {
    const buttons =[
        {
            label:'Main',
            route:AppRoutes.MAIN
        },
        {
            label:'Posts',
            route: AppRoutes.POSTS
        },
        {
            label:'Comments',
            route: AppRoutes.COMMENTS
        },
        {
            label: 'Cars',
            route: AppRoutes.CARS
        }
    ]
    return (
        <div className={styles.navbar}>
            {buttons.map((button,idx)=>
            <Link  key={idx} to={button.route} className={styles.link}>
                {button.label}
            </Link>
            )}
        </div>
    );
};

export default Navbar;