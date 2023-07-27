import {useEffect, useState} from "react";
import {GetServices} from "../../Services/Services";
import Album from "../Album/Album";


const Albums = () => {
  const [albums, setAlbums]= useState([])
    useEffect(()=>{
        GetServices.handleGetAlbums(setAlbums)}, [])
    return (
        <div>
            <Album key={albums.id} albums={albums}/>
        </div>
    );
};

export default Albums;