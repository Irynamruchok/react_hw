
const Company = ({user}) => {
    const {name,catchPhrase,bs} = user.company;
    return (
        <div>
<h2>Company:</h2>
            <h2>Name:{name}</h2>
            <h2>CatchPhrase:{catchPhrase}</h2>
            <h2>Ds:{bs}</h2>
        </div>
    );
};
export default Company;