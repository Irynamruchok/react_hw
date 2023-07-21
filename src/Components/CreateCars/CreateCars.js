import { useRef} from "react";
import styles from './CreateCars.module.css'
const CreateCars = ({onAddCar}) => {

    const brandRef = useRef(null)
    const priceRef = useRef(null)
    const yearRef = useRef(null)
    const handleSubmit = (e)=> {
        e.preventDefault();
        const newCar = {
            brand: brandRef.current.value,
            price: priceRef.current.value,
            year: yearRef.current.value,
        };

        onAddCar(newCar);
        try{
            fetch('http://owu.linkpc.net/carsAPI/v1/cars',
                {method: 'POST', body:JSON.stringify({
                        brand: brandRef.current.value,
                        price: priceRef.current.value,
                        year: yearRef.current.value
                    }),
                    headers:{'Content-Type':'application/json; charset=UTF-8'},

                })
                .then(value => value.json())
                .then(value => console.log(value))
        }
        catch (error){
            console.log(error)}
    }

    return (
       <div className={styles.wrapper}>
    <form className={styles.form} onSubmit={handleSubmit}>
          <label> Brand <input type={"text"} ref={brandRef}/> </label>
          <label> Price <input type={"number"} ref={priceRef}/> </label>
          <label> Year <input type={"number"} ref={yearRef}/> </label>
          <input type={"submit"} value={'Create'}/>
    </form>
       </div>
    );
};

export default CreateCars;