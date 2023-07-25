import {createBrowserRouter} from "react-router-dom";
import AppLayout from "../Components/AppLayout/AppLayout";
 export const router = createBrowserRouter([
    {
        element: <AppLayout/>,
        children:[
            {
                path: "/",
                element: <div>Hello world!</div>,
            }
        ]
    },
]);