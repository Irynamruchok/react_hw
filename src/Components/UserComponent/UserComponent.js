import React, {useState} from 'react';
import PostList from "../PostList/PostList";

const UserComponent = ({user, handleUserClick}) => {
    const {id,name,username} = user
    const [showPosts, setShowPosts] = useState(false)
    const handleClick = () => {
        setShowPosts(true);
        handleUserClick (id)
    }

    return (
        <div>
            <h2>Id:{id}</h2>
            <h2>Name:{name}</h2>
            <h2>Username:{username}</h2>

            {showPosts? (<PostList userId={id}/>) :  (<button onClick={handleClick}>Show Posts </button> )}

        </div>
    );
};

export default UserComponent;