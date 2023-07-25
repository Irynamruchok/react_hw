import React from 'react';
import styles from './UpdateCarForm.module.css'
import {useForm} from "react-hook-form";
import {CarServices} from "../../Services/ApiServices";
const UpdateCarForm = ({onSuccess, carId, setCars, cars}) => {
    const {register, handleSubmit,formState: { errors }} = useForm()
    const onSubmit =(formData)=>{
        CarServices.handleUpdate(carId,formData)
        const updatedCar = { ...formData, id: carId }
        setCars(
            cars.map((car) => (car.id === updatedCar.id ? updatedCar : car))
        );
        onSuccess();

    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <label> Brand:<input type={"text"} {...register('brand', {
                    required: 'This field is required.',
                    pattern : {
                        value: /[a-zA-Zа-яА-яёЁіІїЇ]{1,20}/,
                        message: 'Invalid brand format.',
                    },
                    maxlength: {
                        value: 20,
                        message: 'Brand must be at most 20 characters.',
                    },
                    minLength: {
                        value: 1,
                        message: 'Brand must be at least 1 character.',
                    }
                })}/></label>
                {errors?.brand?.message && <span>{errors.brand.message}</span>}
                <label> Price:<input type={"number"} {...register('price',{
                    required: 'This field is required.',
                    max:{
                        value: 1000000,
                        message: 'Price must be at most 1000000.',
                    },
                    min:{
                        value: 0,
                        message: 'Price must be at least 0.',
                    }
                })}/></label>
                {errors?.price?.message && <span>{errors.price.message}</span>}
                <label> Year:<input type={"number"} {...register('year', {
                    required: 'This field is required.',
                    max: {
                        value: 2023,
                        message: 'Year must be at most 2023.',
                    },
                    min:{
                        value: 1990,
                        message: 'Year must be at least 1990.',
                    }
                })}/></label>
                {errors?.year?.message && <span>{errors.year.message}</span>}
                <input type={"submit"} value="Send"/>
            </form>
        </div>
    );
};

export default UpdateCarForm;