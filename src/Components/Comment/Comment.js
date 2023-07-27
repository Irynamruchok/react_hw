import React from 'react';
const Comment = ({comments}) => {
    return (
        <div>
            {comments.map((comment)=>{
                return(
                    <div>
                        <h3>{comment.postId}</h3>
                        <h3>{comment.id}</h3>
                        <p>{comment.name}</p>
                        <p>{comment.email}</p>
                        <p>{comment.body}</p>
                    </div>
                )
            })}
        </div>
    );
};

export default Comment;