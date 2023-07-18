import React, {useRef} from 'react';
import styles from './CommentsForm.module.css'
const CommentsForm = () => {

    const postIdRef = useRef(null)
    const idRef = useRef(null)
    const nameRef=useRef(null)
    const emailRef=useRef(null)
    const bodyRef=useRef(null)

   const handleSubmit =(e)=>{
      e.preventDefault();

       fetch('https://jsonplaceholder.typicode.com/comments',{method:"POST",body:JSON.stringify({
               postIdRef: postIdRef.current.value,
               idRef:idRef.current.value,
               nameRef:nameRef.current.value,
               emailRef:emailRef.current.value,
               bodyRef:bodyRef.current.value
           })})
           .then(value => value.json())
           .then(value => console.log(value))
   }
    return (
        <div className={styles.wrapper}>
            <form className={styles.formWrapper} onSubmit={handleSubmit}>
                <label> PostId: <input type={"number"} ref={postIdRef}/></label>
                <label> Id:<input type={"number"} ref={idRef}/></label>
                <label> Name: <input type={"text"} ref={nameRef}/></label>
                <label> Email: <input type={"email"} ref={emailRef}/></label>
                <label> Body: <input type={"text"} ref={bodyRef}/></label>
                <input className={styles.button} type={"submit"} value={'Send'}/>
            </form>
        </div>
    );
};

export default CommentsForm;