import React from "react";

import styles from './Cars.module.css'
import Car from "../Car/Car";
class Cars extends React.Component{
    constructor(props) {
        super(props);
        this.state={
           cars:[]
        }
    }
    componentDidMount() {
        fetch('http://owu.linkpc.net/carsAPI/v1/cars')
            .then(response=>response.json())
            .then(data=>this.setState({cars:data}))
            .catch(error=>console.log(error))
    }
    render() {
        const {cars} = this.state
        return(
            <div className={styles.wrapper}>
                {cars.map((car)=>{
                    return(
                        <Car key={car.id} car={car}/>
                    )
                })}
            </div>
        )
    }
}
export default Cars