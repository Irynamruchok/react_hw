import * as actionTypes from './actionTypes'

export const getCars =() => {
    return {
        type: actionTypes.GET_CARS
    }
}
export const createCar = (carData) => {
    return {
        type: actionTypes.CREATE_CAR,
        payload: carData
    }
}
export const updateCar = (carId, formData) => {
    return {
        type: actionTypes.UPDATE_CAR,
        payload: { carId, formData }
    }
}
export const  deleteCar = (carId) => {
    return {
        type: actionTypes.DELETE_CAR,
        payload: carId
    }
}

export const selectedCar = (carId) => {
    return {
        type: actionTypes.SELECT_CAR,
        payload: carId
    }
}