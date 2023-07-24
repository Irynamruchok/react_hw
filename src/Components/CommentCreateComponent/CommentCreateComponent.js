import {useForm} from "react-hook-form";
import styles from './CommentCreateComponent.module.css'
import {CreateServices} from "../../Services/ApiServices";

const CommentCreateComponent = () => {
    const {register, handleSubmit} = useForm()
    const onSubmit = (data) =>{
      CreateServices.handleCreateComment(data)
    }
    return (
        <div>
           <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
               <label> Name:<input type={"text"} {...register('name')}/></label>
               <label>Email:<input type={"text"} {...register('email')}/></label>
               <label> Body:<input type={"text"} {...register('body')}/></label>
               <input type={"submit"}/>
           </form>
        </div>
    );
};

export default CommentCreateComponent;