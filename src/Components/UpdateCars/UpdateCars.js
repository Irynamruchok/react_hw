import React, { useState} from 'react';
import UpdateForm from "../UpdateForm/UpdateForm";
import styles from './UpdateCars.module.css'
const UpdateCars = ({carId}) => {

const [showForm, setShowForm] = useState(false)
    const handleForm = () =>{
        setShowForm(true)
    }
    const handleFormSuccess = () => {
        setShowForm(false);
    };

    return (
        <div className={styles.wrapper}>
            <div>
            <button
                style={{ width: "70px", height: '30px' }}
                type="button"
                onClick={handleForm}>
                Update
            </button>
            </div>
            <div>
                {showForm? <UpdateForm carId={carId} onSuccess={handleFormSuccess}/>:null}
            </div>
        </div>
    )}

export default UpdateCars;