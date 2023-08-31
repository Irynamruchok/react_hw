import React, {useEffect, useState} from 'react';
import {carService} from "../../services/CarServices";
import Car from "../Car/Car";
import CarCreateForm from "../CarCreateForm/CarCreateForm";

const Cars = () => {
    const [cars, setCars] = useState([])
    const [trigger,setTrigger] = useState(null)

    useEffect(()=>{
        carService.getAll().then(({data}) => setCars(data))
    },[trigger])
    return (
        <div>
            <CarCreateForm setTigger={setTrigger}/>
            {cars.map((car) => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export default Cars;