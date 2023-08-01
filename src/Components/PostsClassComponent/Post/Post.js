import React from "react";

import styles from './Post.module.css'
class Post extends React.Component{
    render() {
        const {post}= this.props
        return(
            <div className={styles.postWrapper}>
                <h4> Title:{post.title}</h4>
                <p>  Body:{post.body}</p>
            </div>
        )
    }

}
export default Post