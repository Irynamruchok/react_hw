import axios from "axios";
import {Endpoints} from "../Api/Endpoints";
const {REACT_APP_BASEURL } = process.env
export const CarServices ={
    handleCreate : (data) =>{
        axios.post(REACT_APP_BASEURL + Endpoints.CARS, data)
            .then(data=>console.log(data))
    },
    handleDelete:(data)=>{
        axios.delete(REACT_APP_BASEURL + Endpoints.CARS, data)
            .then(data=>console.log(data))
    },
    handleUpdate:(data)=>{
        axios.put(REACT_APP_BASEURL + Endpoints.CARS, data)
            .then(data=>console.log(data))
    }
}