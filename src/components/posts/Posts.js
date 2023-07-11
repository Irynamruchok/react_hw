
import  {useEffect, useState} from 'react';
import Post from "./post/Post";
import post from "./post/Post";

const Posts = () => {
   const [posts, setPosts] = useState([]);

   useEffect(()=> {
       fetch('https://jsonplaceholder.typicode.com/posts')
           .then(value => value.json())
           .then(value => setPosts(value))
   }, [])
    return (
        <div>
            {posts.map(post=><Post key={post.id} post={post} />)}
        </div>
    );
};

export default Posts;