import React from 'react';

const UserComponent = ({user}) => {
    return (
        <div>
            {user.name}
        </div>
    );
};

export default UserComponent;