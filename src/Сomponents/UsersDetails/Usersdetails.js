
const UsersDetails = ({user}) => {
    const {id,name,username,email,phone,website} = user

    return (
        <div>
            <h1>Id:{id}</h1>
            <h1>Name:{name}</h1>
            <h2>Username:{username}</h2>
            <h2>Email:{email}</h2>
            <h2>Phone:{phone}</h2>
            <h2>Website:{website}</h2>
        </div>
    );
};
export default UsersDetails;