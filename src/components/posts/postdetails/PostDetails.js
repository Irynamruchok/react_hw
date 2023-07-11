

const PostDetails = ({post}) => {
    const {id, postId, title, body} = post
    return (
        <div>
            <div> Id: {id}</div>
            <div>PostId: {postId} </div>
            <div>Title: {title} </div>
            <div>Body: {body} </div>
        </div>
    );
};

export default PostDetails;