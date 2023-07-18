import React, {useRef} from 'react';
import styles from './UserCreateForm.module.css'
const UserCreateForm = () => {

    const idRef = useRef(null)
    const nameRef=useRef(null)
    const usernameRef=useRef(null)
    const handleSubmit = (e)=>{
       e.preventDefault();
       console.log(idRef.current.value,nameRef.current.value,usernameRef.current.value)
        fetch(' https://jsonplaceholder.typicode.com/users',{method:'POST',body:JSON.stringify({
                id:idRef.current.value,
                name:nameRef.current.value,
                username:usernameRef.current.value
            })})
            .then(value => value.json())
            .then(value => console.log(value))
   }
    return (
        <div>
          <form className={styles.form} onSubmit={handleSubmit}>
              <label> Id:
                  <br/> <input type={"text"} ref={idRef}/>
              </label>
              <label>  Name:
                  <br/> <input type={"text"} ref={nameRef}/>
              </label>
              <label>  Username:
                  <input type={"text"} ref={usernameRef}/>
              </label>
           <input type={"submit"} value={'Send'}/>
          </form>
        </div>
    );
};

export default UserCreateForm;