import DeleteCarButton from "../DeleteCarButton/DeleteCarButton";
import UpdateCarButton from "../UpdateCarButton/UpdateCarButton";
const Car = ({car}) => {
    return (
            <div key={car.id} >
                        <h1>Brand:{car.brand}</h1>
                        <p>Price:{car.price}</p>
                        <p>Year:{car.year}</p>
                        <DeleteCarButton carId={car.id}  car={car}/>
                        <br/>
                        <UpdateCarButton carId={car.id}  car={car}/>
                    </div>
    );
};
export default Car;