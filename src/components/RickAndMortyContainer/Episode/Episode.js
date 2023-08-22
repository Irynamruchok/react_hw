import React from 'react';

const Episode = ({episode}) => {
    return (
        <div>
           <div>{episode.id}</div>
            <div>{episode.name}</div>
            <div>{episode.episode}</div>
            hello
        </div>
    );
};

export default Episode;