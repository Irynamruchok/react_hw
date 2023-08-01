import axios from "axios";
import {Endpoints} from "../Api/Endpoints";
const {REACT_APP_BASEURL} = process.env

 export const GetServices ={
    handleGetTodos:()=>{
      return axios.get(REACT_APP_BASEURL + Endpoints.TODOS)
            .then(response => response.data)
            .catch(error=>console.error(error));

    },
     handleGetAlbums:()=>{
       return axios.get(REACT_APP_BASEURL+Endpoints.ALBUMS)
            .then(response=> response.data)
            .catch(error=>console.error(error));
     },
     handleGetComments:()=>{
      return axios.get(REACT_APP_BASEURL+Endpoints.COMMENTS)
            .then(response =>response.data)
            .catch(error=>console.error(error));
     },
handleGetPost:(postId)=>{
       return  axios.get(`${REACT_APP_BASEURL}${Endpoints.POSTS}/${postId}`)
            .then(response=>response.data)
            .catch(error=>console.error(error));
}
}