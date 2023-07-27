import {createBrowserRouter} from "react-router-dom";
import AppLayout from "../Components/AppLayout/AppLayout";
import {AppRoutes} from "./AppRoutes";
import Todos from "../Components/Todos/Todos";
import InfoPage from "../Components/InfoPage/InfoPage";
import Albums from "../Components/Albums/Albums";
import Comments from "../Components/Comments/Comments";
 export const router = createBrowserRouter([
    {
        element: <AppLayout/>,
        children:[
            {
                path:'/',
                element: <InfoPage/>
            },
            {
                path: AppRoutes.TODOS,
                element: <Todos/>,
            },
            {
                path: AppRoutes.ALBUMS,
                element: <Albums/>,
            },
            {
                path: AppRoutes.COMMENTS,
                element: <Comments/>,
            }
        ]
    },
]);