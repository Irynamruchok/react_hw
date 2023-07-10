import React from 'react';
import './Simpson.css'
const Simpson = (props) => {
    let {name, surname, age, info, photo} = props
    return (
        <div className={'simpson'}>
            <h1>{name} {surname}  </h1>
            <h2> {age}</h2>
            <h4>{info} </h4>
            <img src={photo} alt=''/>
        </div>
    );
};

export default Simpson;