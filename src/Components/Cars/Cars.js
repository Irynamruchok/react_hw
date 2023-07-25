import React, {useEffect, useState} from 'react';
import {CarServices} from "../../Services/ApiServices";
import Car from "../Car/Car";
import CreateCarForm from "../CreateCarForm/CreateCarForm";
import styles from './Cars.module.css'
const Cars = () => {
    const [cars,setCars] = useState([])
    useEffect(()=>{CarServices.handleGetCars(setCars)},[])
    const handleAddCar =(newCar)=>{
        setCars([...cars, newCar])
    }

    return (
        <div className={styles.wrapper}>
            <Car key={cars.id} cars={cars} setCars={setCars}/>
            <CreateCarForm onAddCar={handleAddCar}/>
        </div>
    );
};
export default Cars;