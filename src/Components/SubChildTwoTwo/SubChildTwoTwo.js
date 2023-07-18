import React, {createContext, useContext, useEffect, useState} from 'react';
import {ChildContext} from "../../App";


const SubChildTwoTwo = () => {

    let {title, users} = useContext(ChildContext)

     const [user,setUser] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUser(value))
    },[])

  title = 'List Of Users'

    return (
        <div>
{/*<ChildContext.Provider value={{users,title}}></ChildContext.Provider>*/}
        </div>
    );
};

export default SubChildTwoTwo;