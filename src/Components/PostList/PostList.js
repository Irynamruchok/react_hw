import React, {useEffect, useState} from 'react';
import UserPost from "../UserPost/UserPost";

const PostList = ({userId}) => {
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
            .then(value => value.json())
            .then(value => setPosts(value))

    },[userId])

    return (
        <div>
            <h4>Posts by User {userId} </h4>
            {posts.map((post) => <UserPost key={post.id} post={post} />)}
        </div>
    );
};

export default PostList;