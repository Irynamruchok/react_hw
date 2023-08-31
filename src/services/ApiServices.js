import {EndPoints} from "./EndPoints";


 const UsersService = async  () => {
    try {
        return  await fetch('https://jsonplaceholder.typicode.com'+EndPoints.USERS)
            .then(value => value.json())
    }catch (e) {
        console.log(e)
    }
}

const AlbumsService = async () => {
     try {
         return await fetch('https://jsonplaceholder.typicode.com' + EndPoints.ALBUMS)
             .then(value => value.json())
     }catch (e){
         console.log(e)
     }
}

const PostsService = async () => {
     try {
         return await fetch('https://jsonplaceholder.typicode.com' + EndPoints.POSTS)
             .then(value => value.json())
     }catch (e) {
         console.log(e)
     }
}

const PhotosService = async ({params:{id}}) => {
    console.log(id)
     try {
         return await fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
             .then(value => value.json())

     } catch (e) {
         console.log(e)
     }
}
export {UsersService, AlbumsService, PostsService, PhotosService}