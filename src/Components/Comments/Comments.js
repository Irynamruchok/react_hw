import React, {useEffect, useState} from "react";
import {GetServices} from "../../Services/Services";
import Comment from "../Comment/Comment";
import {Outlet} from "react-router-dom";


const Comments = () => {
    const [comments, setComments] = useState([])
    useEffect(()=>{GetServices.handleGetComments(setComments)},[])

    return (
        <div>
            {comments.map((comment)=>{
                return(<Comment key={comment.id} comment={comment}/> )
})}
            <Outlet />
        </div>
    );
};

export default Comments;