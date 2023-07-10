import React, {useState} from 'react';
import posts from "../Posts";
import PostDetails from "../postdetails/PostDetails";

const Post = ({post}) => {
    const [isShow, setIsShow] = useState(false);
    const {id, title} = post
    return (
        <div>
          <h1> Id: {id}</h1>
            <h2> Title: {title}</h2>
            <button onClick={()=> setIsShow (!isShow)}>{isShow?'Hide':'Show'}</button>
            {isShow&& <PostDetails post={post}/>}
        </div>
    );
};

export default Post;