import React, {useContext} from 'react';
import {ChildContext} from "../../App";

const SubChildOneOne = () => {
    const {title,users} = useContext( ChildContext)
    return (
        <div >
            <h2>{title}</h2>
            {users.map((user)=>
                <div  key={user.id}>

                    <p>{user.name}</p>
                </div>

            )}
        </div>
    );
};

export default SubChildOneOne;