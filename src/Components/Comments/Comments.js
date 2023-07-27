import {useEffect, useState} from "react";
import {GetServices} from "../../Services/Services";
import Comment from "../Comment/Comment";


const Comments = () => {
    const [comments, setComments] = useState([])
    useEffect(()=>{GetServices.handleGetComments(setComments)},[])
    return (
        <div>
            <Comment key={comments.id} comments={comments}/>
        </div>
    );
};

export default Comments;