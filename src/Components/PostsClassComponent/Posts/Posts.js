import React from "react";

import Post from "../Post/Post";
import styles from './Posts.module.css'
class Posts extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
          posts:[]
        }
    }
     componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
          .then(response=>response.json())
          .then(data=>this.setState({posts:data}))
          .catch(error=> console.log(error))
    }
    render() {
        const {posts}=this.state

        return(
            <div className={styles.wrapper}>
                {posts.map((post)=>{
                    return(
                        <Post key={post.id} post={post} />
                    )
                })}
            </div>
        )
    }
}
export default Posts