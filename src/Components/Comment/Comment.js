import React from 'react';
import {Link} from "react-router-dom";
import {AppRoutes} from "../../Routing/AppRoutes";

const Comment = ({comment}) => {
  return(
      <div>
          <h3>{comment.postId}</h3>
          <h3>{comment.id}</h3>
          <p>{comment.name}</p>
          <p>{comment.email}</p>
          <p>{comment.body}</p>
          <Link to={AppRoutes.POSTS + `${postId}`}> Show Post </Link>

      </div>
  )



};

export default Comment;