import UsersDetails from "../usersdetails/UsersDetails";
import UserAddress from "../useraddress/UserAddress";
import Company from "../company/Company";

const Users = ({user}) => {
    return (
        <div>
            <UsersDetails  key={user.id} user={user} />
            <UserAddress key={user.id} user={user} />
            <Company key={user.id} user={user} />
        </div>
    );
};
export default Users;