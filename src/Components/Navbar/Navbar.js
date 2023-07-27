import styles from './Navbar.module.css'
import {AppRoutes} from "../../Routing/AppRoutes";
import {Link} from "react-router-dom";
const Navbar = () => {
    const buttons =[
        {
            label: 'Main',
            route: AppRoutes.MAIN
        },
        {
            label: 'Todos',
            route: AppRoutes.TODOS
        },
        {
            label: 'Albums',
            route: AppRoutes.ALBUMS
        },
        {
            label: 'Comments',
            route: AppRoutes.COMMENTS
        }
    ]
    return (
        <div className={styles.navbar}>
            {buttons.map((button,idx)=>
                <Link key={idx} to={button.route} className={styles.link}>
                    {button.label}
                </Link>
            )}

        </div>
    );
};

export default Navbar;