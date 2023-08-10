import {CarServices} from "../Services/ApiServices";
import * as actionTypes from '/Users/macbookair/Desktop/React_Homeworks/react_hw/src/ReduxCore/actions/actionTypes.js'

export const getCars = () => async (dispatch) => {
    try{
        const cars = await CarServices.handleGetCars();
        dispatch({type: actionTypes.GET_CARS , payload:cars});
    }catch (e) {
        console.log(e)
    }
}

export const createCar = (carData) => async (dispatch) => {
    try {
        const createdCar = await CarServices.handleCreate(carData);
        dispatch({type:actionTypes.CREATE_CAR, payload: createdCar})
    }catch (error) {
        console.log(error)
    }
}

export const updateCar = (carId, formData) => async (dispatch) => {
    try{
        const updatedCar = await CarServices.handleUpdate(carId, formData);
        dispatch({type:actionTypes.UPDATE_CAR, payload:{carId, updatedCar}})
    }catch (error) {
        console.log(error)
    }
}

export const deleteCar = (carId) => async (dispatch) => {
    try {
        const deletedCar = await CarServices.handleDelete(carId);
        dispatch({type:actionTypes.DELETE_CAR, payload:deletedCar})
    }catch (error) {
        console.log(error)
    }
}