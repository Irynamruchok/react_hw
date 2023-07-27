import React from 'react';

const Album = ({albums}) => {
    return (
        <div>
            {albums.map((album)=>{
                return(
                    <div key={album.id}>
                        <h1>{album.id}</h1>
                        <p>{album.title}</p>
                    </div>
                )
            })}
        </div>
    );
};

export default Album;