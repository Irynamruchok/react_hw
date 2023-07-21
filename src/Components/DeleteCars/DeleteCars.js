
const DeleteCars = ({carId,onDeleteCar}) => {
    const  handleDelete=()=>{
        onDeleteCar(carId);
        try {
            fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${carId}`,
                {
                    method:'DELETE'
                })
                .then(value => value.json())
                .then(value => console.log(value))
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <button
                style={{ width: "70px", height: '30px' }}
                type="button"
                onClick={handleDelete}>
                Delete
            </button>
        </div>
    );
};

export default DeleteCars;