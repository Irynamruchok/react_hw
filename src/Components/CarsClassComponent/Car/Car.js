import React from "react";

import styles from './Car.module.css'
class Car extends React.Component{
    render() {
        const {car} = this.props
        return(
            <div className={styles.carWrapper}>
                <h5> Brand:{car.brand}</h5>
                <p> Year:{car.year}</p>
                <p> Price:{car.price}</p>
            </div>
        )
    }
}
export default Car