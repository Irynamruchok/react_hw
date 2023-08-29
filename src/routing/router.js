import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import {AppRoutes} from "./AppRoutes";
import UsersPage from "../pages/UsersPage/UsersPage";
import {UsersService} from "../services/ApiServices";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children:[
            {
                path:AppRoutes.USERS,
                element: <UsersPage/>,
                loader: UsersService
            }
        ]
    }
])


export default router