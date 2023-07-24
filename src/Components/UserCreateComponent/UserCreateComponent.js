import styles from './UserCreateComponent.module.css'
import {useForm} from "react-hook-form";
import {CreateServices} from "../../Services/ApiServices";
const UserCreateComponent = () => {
    const {register, handleSubmit} = useForm()
    const onSubmit = (data) => {
CreateServices.handleCreateUser(data)
    }
    return (
        <div >
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <label > Name:<input type={"text"} {...register('name')}/></label>
                <label >Username:<input {...register('username')}/></label>
                <label> Email:<input {...register('email')}/></label>
                <input type={"submit"}/>
            </form>
        </div>
    );
};

export default UserCreateComponent;