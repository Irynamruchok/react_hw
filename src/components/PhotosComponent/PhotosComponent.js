import React from 'react';
import {useLoaderData, useLocation} from "react-router-dom";

const PhotosComponent = () => {
    const {state:albumsForThisPhoto} = useLocation()
    const photos = useLoaderData()
    console.log(photos)
    return (
        <div>
            <div> {JSON.stringify(albumsForThisPhoto)}</div>
            <hr/>
            {photos.map((photo)=>{
              return(

                      <div key={photo.id}>{photo.title}</div>


               )
            })}
        </div>
    );
};

export default PhotosComponent;