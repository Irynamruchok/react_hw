import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import {AppRoutes} from "./AppRoutes";
import UsersPage from "../pages/UsersPage/UsersPage";
import {AlbumsService, PhotosService, PostsService, UsersService} from "../services/ApiServices";
import AlbumsPage from "../pages/AlbumsPage/AlbumsPage";
import PostPage from "../pages/PostPage/PostPage";
import PhotosComponent from "../components/PhotosComponent/PhotosComponent";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children:[
            {
                path:AppRoutes.USERS,
                element: <UsersPage/>,
                loader: UsersService
            },
            {
                path: AppRoutes.ALBUMS,
                element: <AlbumsPage/>,
                loader: AlbumsService,
            },

            {
                path: AppRoutes.POSTS,
                element: <PostPage/>,
                loader: PostsService
            },
            {
                path: 'albums/:id',
                element: <PhotosComponent/>,
                loader: PhotosService
            }
        ]
    }
])


export default router