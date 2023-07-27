import axios from "axios";
import {Endpoints} from "../Api/Endpoints";
const REACT_APP_BASEURL = process.env

 export const GetServices ={
    handleGetTodos:(setTodos)=>{
        axios.get(REACT_APP_BASEURL + Endpoints.TODOS)
            .then(response => setTodos(response.data))
            .then(data=>console.log(data))
            .catch(error => console.error(error));
    }
}