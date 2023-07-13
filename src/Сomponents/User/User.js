
import UsersDetails from "../UsersDetails/UsersDetails";
import UserAddress from "../UserAddress/UserAddress";
import Company from "../Сompany/Company";
const User = ({user}) => {
    return (
        <div>
            <UsersDetails  key={user.id} user={user} />
            <UserAddress key={user.id} user={user} />
            <Company key={user.id} user={user} />
        </div>
    );
};

export default User;