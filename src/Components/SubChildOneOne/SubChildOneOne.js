import React, {useContext} from 'react';
import {ChildContext} from "../../App";

const SubChildOneOne = () => {
    const {users} = useContext( ChildContext)

    return (
        <div >

            {users.map((user)=>
                <div  key={user.id}>
                    <p>{user.name}</p>
                </div>

            )}
        </div>
    );
};

export default SubChildOneOne;