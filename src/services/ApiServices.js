import {EndPoints} from "./EndPoints";

const {REACT_API_BASEURL} = process.env

 const UsersService = async () => {
    return await fetch(REACT_API_BASEURL + EndPoints.USERS)
        .then(data => data.json())

}


export {UsersService}