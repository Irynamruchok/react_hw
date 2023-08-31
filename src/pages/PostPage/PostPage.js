import React from 'react';
import {useLoaderData} from "react-router-dom";
import PostsComponent from "../../components/PostsComponent/PostsComponent";

const PostPage = () => {

    const posts = useLoaderData()
    return (
        <div>
            {posts.map((post)=> <PostsComponent key={post.id} post={post}/>)}
        </div>
    );
};

export default PostPage;