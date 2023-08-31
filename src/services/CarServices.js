import {apiService} from "./ApiService";
import {baseUrl, Endpoints} from "./EndPoints";

const carService = {
    getAll:() => apiService.get(baseUrl+ Endpoints.CARS.base),
    create:(data) => apiService.post( baseUrl+Endpoints.CARS.base, data),
    updateById:(id,data) => apiService.put( baseUrl+Endpoints.CARS.byId(id), data),
    deleteById:(id) => apiService.delete(baseUrl+Endpoints.CARS.byId(id))
}

export {carService}