import {createBrowserRouter} from "react-router-dom";
import {AppRoutes} from "./AppRoutes";
import Posts from "../PostsClassComponent/Posts/Posts";
import Comments from "../CommentsClassComponent/Comments/Comments";
import Cars from "../CarsClassComponent/Cars/Cars";


export const router = createBrowserRouter([
    {
        element:<AppLayout/>,
        children:[
            {
                path:AppRoutes.MAIN,
                element:<Main/>
            },
            {
                path:AppRoutes.POSTS,
                element:<Posts/>
            },
            {
                path:AppRoutes.COMMENTS,
                element:<Comments/>
            },
            {
                path:AppRoutes.CARS,
                element:<Cars/>
            }
        ]
    }
])