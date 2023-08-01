import React from "react";

import styles from './Comment.module.css'
class Comment extends React.Component{
    render() {
        const {comment} = this.props
        return(
            <div className={styles.commentWrapper}>
                <h4> {comment.name}</h4>
                <p> {comment.email}</p>
                <p> {comment.body}</p>
            </div>
        )
    }
}
export default Comment