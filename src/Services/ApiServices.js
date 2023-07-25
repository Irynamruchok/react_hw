import axios from "axios";
import {Endpoints} from "../Api/Endpoints";
const {REACT_APP_BASEURL } = process.env
export const CarServices ={
    handleGetCars:(setCars)=>{
        axios.get(REACT_APP_BASEURL+Endpoints.CARS)
            .then(response=>{setCars(response.data)})
            .then(data=>console.log(data))
            .catch(error => console.error(error))
    },
    handleCreate : (data) =>{
        axios.post(REACT_APP_BASEURL + Endpoints.CARS, data)
            .then(data=>console.log(data))
            .catch(error => console.error(error))
    },
    handleDelete:(carId)=>{
        axios.delete(REACT_APP_BASEURL + Endpoints.CARS + `/${carId}`)
            .then(data=>console.log(data))
            .catch(error => console.error(error))
    },
    handleUpdate:(carId, formData)=>{
        axios.put(REACT_APP_BASEURL + Endpoints.CARS +`/${carId}`,formData)
            .then(data=>console.log(data))
            .catch(error => console.error(error))
    }
}