import * as actionTypes from '/Users/macbookair/Desktop/React_Homeworks/react_hw/src/ReduxCore/actions/actionTypes.js'
const initialState = {
    cars: [],
    selectedCar: null
}
const carsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_CARS:
            return {...state, cars: action.payload};
        case actionTypes.CREATE_CAR:
            return {...state, cars: [...state, action.payload]};
        case actionTypes.UPDATE_CAR:
            const updatedCars = state.cars.map((car)=>
            car.id === action.payload.id ? action.payload : car
            );
            return {...state, cars: updatedCars}
        default:
            return state
        case actionTypes.DELETE_CAR:
            return {...state, cars: state.cars.filter((car)=> car.id !==action.payload)}
        case actionTypes.SELECT_CAR:
            return {...state, selectedCar:action.payload}
    }
}
export default carsReducer

