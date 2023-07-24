import {useForm} from "react-hook-form";
import {CarServices} from "../../Services/ApiServices";
import styles from './CreateCarForm.module.css'

const CreateCarForm = () => {
    const {register, handleSubmit} = useForm()
    const onSubmit =(data)=>{
CarServices.handleCreate(data)
    }
    return (
        <div>
<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
    <label> Brand:<input type={"text"} {...register('brand', {
        required: 'This field is required.',
        pattern : {
            value: /[a-zA-Zа-яА-яёЁіІїЇ]{1,20}/,
            message: 'Invalid brand format.',
        },
        maxlength: {
            value: 20,
            message: 'Brand must be at most 20 characters.',
        },
        minLength: {
            value: 1,
            message: 'Brand must be at least 1 character.',
        }
    })}/></label>
    <label> Price:<input type={"number"} {...register('price',{
        required: 'This field is required.',
        max:{
            value: 1000000,
            message: 'Price must be at most 1000000.',
        },
        min:{
            value: 0,
            message: 'Price must be at least 0.',
        }
    })}/></label>
    <label> Year:<input type={"number"} {...register('year', {
        required: 'This field is required.',
        max: {
            value: 2023,
            message: 'Year must be at most 2023.',
        },
        min:{
            value: 1990,
            message: 'Year must be at least 1990.',
        }
    })}/></label>
    <input type={"submit"}/>
</form>
        </div>
    );
};

export default CreateCarForm;