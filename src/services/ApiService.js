import axios from "axios";
import {baseUrl} from "./EndPoints";


const apiService = axios.create({baseUrl})

export {apiService}