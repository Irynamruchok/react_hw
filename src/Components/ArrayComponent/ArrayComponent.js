import useArray from "../Hooks/UseArray/useArray";
const ArrayComponent = () => {
    const {array, add, remove} = useArray([1,2,3])
    const handleAddItem = () => {
        add(1)
    }
    const handleRemoveItem = (id) => {
        remove(id)
    }
    return (
        <div>
            <h2>Array Example</h2>
            {array.map((item, index)=>(
                <p key={index}>
                    {item}
                    <button onClick={()=> handleRemoveItem(index)}> Remove</button>
                </p>
            ))}
            <button onClick={handleAddItem}>Add Item</button>
        </div>
    );
};

export default ArrayComponent;