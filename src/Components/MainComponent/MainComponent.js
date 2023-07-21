import React from 'react';
import styles from './MainComponent.module.css'
import Cars from "../Cars/Cars";
const MainComponent = () => {
    return (

            <div className={styles.mainContainer}>
                <Cars/>
            </div>
    );
};

export default MainComponent;