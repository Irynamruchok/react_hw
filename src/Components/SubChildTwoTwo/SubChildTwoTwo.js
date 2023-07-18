import React, {createContext, useEffect, useState} from 'react';
import SubChildOneOne from "../SubChildOneOne/SubChildOneOne";
 export const SubChildContext = createContext(null)
const SubChildTwoTwo = () => {

     const [users,setUsers] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers(value))
    },[])
    const title = 'List Of Users'
    return (
        <div>

            <SubChildContext.Provider value={{ title, users}}>
                <SubChildOneOne />
            </SubChildContext.Provider>
        </div>
    );
};

export default SubChildTwoTwo;