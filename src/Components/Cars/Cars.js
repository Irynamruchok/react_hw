import React, {useEffect, useState} from 'react';
import Car from "../Car/Car";
import CreateCars from "../CreateCars/CreateCars";
import styles from './Cars.module.css'
const Cars = () => {
    const [cars,setCars]  =useState([])

    useEffect(()=>{
        fetch('http://owu.linkpc.net/carsAPI/v1/cars')
            .then(value => value.json())
            .then(value => setCars(value))
    },[])
    const handleAddCar = (newCar) => {
        setCars([...cars, newCar]);
    };
    const handleDeleteCar = (carId)=>{
        setCars(cars.filter((car)=> car.id !==carId))
    }

    return (
        <div className={styles.wrapper}>
            <Car key={cars.id} cars={cars} onDeleteCar={handleDeleteCar}  />
            <CreateCars onAddCar={handleAddCar}/>
        </div>
    );
};

export default Cars;