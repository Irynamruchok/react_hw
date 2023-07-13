import React from 'react';

const UserPost = ({post}) => {
    const {id,title,body} = post
    return (
        <div>
            <h4>Id:{id}</h4>
            <h4>Title:{title}</h4>
            <h4>Body:{body}</h4>
        </div>
    );
};

export default UserPost;