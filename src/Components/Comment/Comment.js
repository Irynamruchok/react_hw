import React from 'react';
import {Link} from "react-router-dom";


const Comment = ({comment}) => {
    const {postId, id, name, email, body} = comment
  return(
      <div>
          <h3>{postId}</h3>
          <h3>{id}</h3>
          <p>{name}</p>
          <p>{email}</p>
          <p>{body}</p>
          <Link to={`posts/${postId}`}>Show Post</Link>

      </div>
  )



};

export default Comment;