import React from 'react';
import {useNavigate} from "react-router-dom";

const AlbumsComponent = ({album }) => {

    const navigate = useNavigate()
    const handleGetPhoto = () => {
        navigate({pathname:`${album.id}`},{state:{...album}})
    }
    return (
        <div style={{ margin: '10px', cursor:'pointer'}} onClick={handleGetPhoto}>
       {album.title}
        </div>
    );
};




export default AlbumsComponent;