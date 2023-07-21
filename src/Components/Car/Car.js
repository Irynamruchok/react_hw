import React from 'react';
import DeleteCars from "../DeleteCars/DeleteCars";
import UpdateCars from "../UpdateCars/UpdateCars";
import styles from './car.module.css'
const Car = ({cars,onDeleteCar}) => {
    return (
        <div  >
            {cars.map((car)=>{
                return(
                    <div key={car.id} >
                        <div className={styles.carBlock}>
                        <h1> Brand: {car.brand}</h1>
                        <p> Price: {car.price}</p>
                        <p> Year: {car.year}</p>
                        </div >
                        <div className={styles.buttons}>
                        <DeleteCars carId={car.id}  onDeleteCar={onDeleteCar}/>
                        <UpdateCars carId={car.id} />
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default Car;