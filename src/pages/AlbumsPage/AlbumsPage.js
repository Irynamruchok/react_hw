import React from 'react';
import {  useLoaderData, useNavigate} from "react-router-dom";
import AlbumsComponent from "../../components/AlbumsComponent/AlbumsComponent";


const AlbumsPage = () => {

    const albums = useLoaderData()



    return (
        <div style={{display:'flex',flexDirection:'column', justifyContent:'space-around'}}>
            {albums.map((album) => <AlbumsComponent key={album.id} album={album} />)}

        </div>

    );
};

export default AlbumsPage;