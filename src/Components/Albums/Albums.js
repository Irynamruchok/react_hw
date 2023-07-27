import {useEffect, useState} from "react";
import {GetServices} from "../../Services/Services";
import Album from "../Album/Album";

const Albums = () => {
    const [albums, setAlbums] = useState([])
    useEffect(() => {
        GetServices.handleGetAlbums(setAlbums)
    }, [])
    return(<div>
        {albums.map((album)=>{
            return(
                <Album key={album.id} album={album}/>
            )
        })}
    </div>)

}
export default Albums;