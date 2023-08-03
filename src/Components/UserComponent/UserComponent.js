import React from 'react';
import useFetch from "../Hooks/UseFetch/useFetch";

const UserComponent = () => {
    const {data, loading, error} = useFetch('/users')
    if (loading) {
        return <div> Loading...</div>
    }
    if (error) {
        return <div> Error:{error.message}</div>
    }
    return (
        <div>
            <h1>Users</h1>
            {data.map((user)=>(
                <p key={user.id}>{user.name}</p>
                )
            )}
        </div>
    );
};

export default UserComponent;