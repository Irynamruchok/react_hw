import React, {useState} from 'react';
import UpdateCarForm from "../UpdateCarForm/UpdateCarForm";
  const UpdateCarButton = ({carId, setCars, cars}) => {
  const[showForm, setShowForm] = useState(false)
    const handleForm =()=>{
      setShowForm(true)
    }
    const handleFormSuccess =()=>{
     setShowForm(false)
    }
    return (
        <div>
            <button style={{width:'100px', height:'40px'}} type={"button"} onClick={handleForm}> Update Car </button>
            <div>{showForm? <UpdateCarForm carId={carId} setCars={setCars} cars={cars} onSuccess={handleFormSuccess}/>:null}</div>
        </div>
    );
};

export default UpdateCarButton;