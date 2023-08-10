import axios from "axios";
import {Endpoints} from "../Api/Endpoints";
const {REACT_APP_BASEURL } = process.env
export const CarServices ={
    handleGetCars:()=>{
      return   axios.get(REACT_APP_BASEURL+Endpoints.CARS)
            .then(response=>response.data)
            .then(data=>console.log(data))
            .catch(error => console.error(error))
    },
    handleCreate : (data) =>{
     return   axios.post(REACT_APP_BASEURL + Endpoints.CARS, data)
            .then(data=>console.log(data))
            .catch(error => console.error(error))
    },
    handleDelete:(carId)=>{
      return  axios.delete(REACT_APP_BASEURL + Endpoints.CARS + `/${carId}`)
            .then(data=>console.log(data))
            .catch(error => console.error(error))
    },
    handleUpdate:(carId, formData)=>{
      return   axios.put(REACT_APP_BASEURL + Endpoints.CARS +`/${carId}`,formData)
            .then(data=>console.log(data))
            .catch(error => console.error(error))
    }
}
