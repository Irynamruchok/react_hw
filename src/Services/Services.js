import axios from "axios";
import {Endpoints} from "../Api/Endpoints";
const {REACT_APP_BASEURL} = process.env

 export const GetServices ={
    handleGetTodos:(setTodos)=>{
        axios.get(REACT_APP_BASEURL + Endpoints.TODOS)
            .then(response => setTodos(response.data))
            .catch(error => console.error(error));
    },
     handleGetAlbums:(setAlbums)=>{
        axios.get(REACT_APP_BASEURL+Endpoints.ALBUMS)
            .then(response=> setAlbums(response.data))
            .catch(error=>console.error(error));
     },
     handleGetComments:(setComments)=>{
        axios.get(REACT_APP_BASEURL+Endpoints.COMMENTS)
            .then(response =>setComments(response.data))
            .catch(error=>console.error(error));
     },
handleGetPost:(postId,setPost)=>{
        axios.get(`${REACT_APP_BASEURL}${Endpoints.POSTS}/${postId}`)
            .then(response=>setPost(response.data))
            .catch(error=>console.error(error));
}
}