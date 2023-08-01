import React from "react";

import Comment from "../Comment/Comment";
import styles from './Comments.module.css'
class Comments extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            comments:[]
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response=>response.json())
            .then(data=>this.setState({comments:data}))
            .catch(error=> console.log(error))
    }
    render() {
        const {comments}=this.state
        return(
            <div className={styles.wrapper}>
                {comments.map((comment)=>{
                    return(
                        <Comment key={comment.id} comment={comment}/>
                    )
                })}
            </div>
        )
    }
}
export default Comments