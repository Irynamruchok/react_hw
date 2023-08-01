import React, {useEffect, useState} from 'react';
import {GetServices} from "../../Services/Services";
import {useParams} from "react-router-dom";

const Post = () => {
    const {postId} = useParams()
    const [post,setPost] = useState(null)
    useEffect(()=>{
        GetServices.handleGetPost(postId)
            .then(postData=>{
                setPost(postData)
            })
    },[postId]);

    console.log(post)
    return (
        <div>
            {post?.title}
        </div>
    );
};

export default Post;