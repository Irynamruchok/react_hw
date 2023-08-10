
import {useDispatch} from "react-redux";
import {deleteCar} from "../../Thunks/carThunkActions";
const DeleteCarButton = (carId) => {
    const dispatch = useDispatch()
    const handleDelete = ()=>{
       dispatch(deleteCar(carId))
    }

    return (
        <div >
            <button style={{width:'100px', height:'40px'}} type={"button"} onClick={handleDelete}> Delete Car </button>
        </div>
    );
};
export default DeleteCarButton;