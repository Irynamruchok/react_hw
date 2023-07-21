import React from 'react';
import {useRef} from "react";
import styles from './UpdateForm.module.css'
const UpdateForm = ({carId,onSuccess}) => {
    console.log(carId)
    const brandRef = useRef(null)
    const priceRef = useRef(null)
    const yearRef = useRef(null)
    const handleSubmit=(e)=>{
        e.preventDefault();
        try {
            fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${carId}`,
                {
                    method:'PUT',
                    body:JSON.stringify({
                        brand: brandRef.current.value,
                        price: priceRef.current.value,
                        year: yearRef.current.value
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                .then(value => value.json())
                .then(value => console.log(value))
                  onSuccess();
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <form className={styles.form} onSubmit={handleSubmit}>
                  <label> Brand <input type={"text"} ref={brandRef}/> </label>
                  <label> Price <input type={"number"} ref={priceRef}/> </label>
                  <label> Year <input type={"number"} ref={yearRef}/> </label>
                  <input type={"submit"} value={'Send'}/>
              </form>
        </div>
    );

};

export default UpdateForm;