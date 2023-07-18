import React, {useContext} from 'react';
import {SubChildContext} from "../SubChildTwoTwo/SubChildTwoTwo";

const SubChildOneOne = () => {
    const { title, users } = useContext(SubChildContext)
    return (
        <div >
            <h2>{title}</h2>
            {users.map((user)=>

                <div  key={user.id}>
                <p> {user.name}</p>
                </div>
            )}
        </div>
    );
};

export default SubChildOneOne;