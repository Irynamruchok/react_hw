import axios from "axios";
import {Endpoints} from "../Api/Endpoints";
const {REACT_APP_BASEURL} = process.env
 export const CreateServices ={
    handleCreateUser : (data) =>{
        axios.post(REACT_APP_BASEURL + Endpoints.USERS, data)
        .then(data => console.log(data))
    },
     handleCreateComment: (data) =>{
        axios.post(REACT_APP_BASEURL+Endpoints.COMMENTS, data)
        .then(data=>console.log(data))
     }
}