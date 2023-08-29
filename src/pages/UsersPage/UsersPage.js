import React from 'react';
import {useLoaderData} from "react-router-dom";
import UserComponent from "../../components/UserComponent/UserComponent";

const UsersPage = () => {

    const users = useLoaderData()

    return (
        <div>
            {users.map((user) => <UserComponent user={user} key={user.id}/> )}
        </div>
    );
};

export default UsersPage;