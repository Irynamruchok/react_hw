import styles from './Navbar.module.css'
import {Outlet} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <h1>Navbar</h1>
              <Outlet/>
        </div>
    );
};

export default Navbar;