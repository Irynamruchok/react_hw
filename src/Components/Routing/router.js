import {createBrowserRouter} from "react-router-dom";
import {AppRoutes} from "./AppRoutes";
import Posts from "../PostsClassComponent/Posts/Posts";
import Comments from "../CommentsClassComponent/Comments/Comments";
import Cars from "../CarsClassComponent/Cars/Cars";
import AppLayout from "../Layouts/AppLayout";
import MainComponent from "../MainComponent/MainComponent";

export const router = createBrowserRouter([
    {
        element:<AppLayout/>,
        children:[
            {
                path:AppRoutes.MAIN,
                element:<MainComponent/>
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