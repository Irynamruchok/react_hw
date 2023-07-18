import React, { useContext, useEffect} from 'react';
import {ChildContext} from "../../App";
const SubChildTwoTwo = () => {

    let context = useContext(ChildContext)

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => context.setUsers(value))
    },[])

    return (
        <div>
        </div>
    );
};
export default SubChildTwoTwo;