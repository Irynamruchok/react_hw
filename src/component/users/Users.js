import React from 'react';
import './Users.css'
const Users = ({id, name, status, species, gender, image}) =>  {

    return (
        <div className={'user'}>
            <h1>{id} </h1>
            <h1>{name}</h1>
            <h2>{status} {species}</h2>
            <h3>{gender}</h3>
            <img src={image}/>
        </div>
    );
};

export default Users;