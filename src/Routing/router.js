import {createBrowserRouter} from "react-router-dom";
import AppLayout from "../Components/AppLayout/AppLayout";
import {AppRoutes} from "./AppRoutes";
import Todos from "../Components/Todos/Todos";
import Main from "../Components/Main/Main";
import Albums from "../Components/Albums/Albums";
import Comments from "../Components/Comments/Comments";
import Post from "../Components/Post/Post";
 export const router = createBrowserRouter([
    {
        element: <AppLayout/>,
        children:[
            {
                path:'/',
                element: <Main/>
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
                children:[
                    {
                        path:AppRoutes.POSTS,
                        element:<Post/>
                    }
                ]
            }
        ]
    },
]);