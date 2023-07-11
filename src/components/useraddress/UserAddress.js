
const UserAddress = ({user}) => {
    const { city,street,suite } = user.address;
    return (
        <div>
            <h2>City: {city}</h2>
            <h2>Street: {street}</h2>
            <h2>Suite: {suite}</h2>
        </div>
    );
};
export default UserAddress;