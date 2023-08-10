import React from 'react';
import UpdateCarForm from "../UpdateCarForm/UpdateCarForm";
import {useDispatch, useSelector} from "react-redux";
  const UpdateCarButton = (carId) => {
   const dispatch = useDispatch()
      const  selectedCar = useSelector((state) => state.selectedCar)
    const handleForm =()=>{
      dispatch(selectedCar(carId))
    }
    const handleFormSuccess =()=>{

    }
    return (
        <div>
            <button style={{width:'100px', height:'40px'}} type={"button"} onClick={handleForm}> Update Car </button>
            <div>{selectedCar === carId && <UpdateCarForm carId={carId} onSuccess={handleFormSuccess}/> }</div>
        </div>
    );
};

export default UpdateCarButton;