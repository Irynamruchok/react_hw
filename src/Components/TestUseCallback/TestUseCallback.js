import {memo} from "react";
const TestUseCallback = ({users, addUser}) => {
    console.log('New User')
    return (
        <div >
            {users.map((user,idx)=>
                <p key={idx}> {user}</p>)}
            <button style={{width:'150px', height:'30px'}} onClick={addUser} >Add Users</button>
        </div>
    );
};

export default memo(TestUseCallback);