import React from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../services/CarServices";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators/carValidator";

const CarCreateForm = ({setTrigger}) => {
    const {reset, register, handleSubmit, setValue, formState: {errors, isValid}} = useForm({
        resolver: joiResolver(carValidator),
        mode:'all'
    })

    const save = async (car) => {
        try {
            const {data} = await carService.create(car)
            setTrigger(prev=>!prev)
            reset()
            console.log(data)
        }catch (e) {
        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <div><input type={"text"} placeholder={'brand'} {...register('brand')}/></div>
                {errors.brand && <div>{errors.brand.message}</div> }
                <div><input type={"text"} placeholder={'price'} {...register('price', {valueAsNumber:true})}/></div>
                {errors.price && <div>{errors.price.message}</div>}
                <div><input type={"text"} placeholder={'year'} {...register('year', {valueAsNumber:true})}/></div>
                {errors.year && <div>{errors.year.message}</div>}
                <button>Save</button>
            </form>
        </div>
    );
};

export default CarCreateForm;