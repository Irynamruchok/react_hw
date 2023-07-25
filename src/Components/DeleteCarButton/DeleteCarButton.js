import React from 'react';
import {CarServices} from "../../Services/ApiServices";
const DeleteCarButton = ({carId,setCars, cars}) => {
    const handleDelete = ()=>{
        CarServices.handleDelete(carId)
        setCars(cars.filter((car) => car.id !== carId));
    }

    return (
        <div >
            <button style={{width:'100px', height:'40px'}} type={"button"} onClick={handleDelete}> Delete Car </button>
        </div>
    );
};
export default DeleteCarButton;