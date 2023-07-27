import React, {useEffect, useState} from 'react';
import {GetServices} from "../../Services/Services";

const Todos = () => {
const [todos, setTodos]=useState([])
    useEffect(()=>{
        GetServices.handleGetTodos(setTodos)
    },[])
    return (
        <div>
            {todos.map((todo)=>{
               return(
                   <div key={todo.id}>
                       <h1>{todo.title}</h1>
                       <p>{todo.completed}</p>
                   </div>
               )
            })}
        </div>
    );
};

export default Todos;