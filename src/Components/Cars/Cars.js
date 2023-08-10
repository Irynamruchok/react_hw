import React, {useEffect} from 'react';

import Car from "../Car/Car";
import CreateCarForm from "../CreateCarForm/CreateCarForm";
import styles from './Cars.module.css'
import {useDispatch, useSelector} from "react-redux";
import {createCar, getCars} from "../../Thunks/carThunkActions";

function Cars ()  {
    const cars = useSelector((state) => state.cars)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getCars())
    },[dispatch])

const handleAddCar = (newCar) => {
        dispatch(createCar(newCar))
}

    if (!cars) {

        return <p>Loading...</p>;
    }
    return (
        <div className={styles.wrapper}>
            {cars.map((car)=>
                <div> <Car key={car.id} car={car} /> </div>
            )}
            <div> <CreateCarForm onAddCar={handleAddCar}/></div>

        </div>
    );
}
export default Cars;