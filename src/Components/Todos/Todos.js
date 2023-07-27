import React, {useEffect, useState} from 'react';
import {GetServices} from "../../Services/Services";
import Todo from "../Todo/Todo";

const Todos = () => {
const [todos, setTodos]=useState([])
    useEffect(()=>{
        GetServices.handleGetTodos(setTodos)
    },[])
    return (
      <div>
          {todos.map((todo)=>{
              return(
              <Todo key={todo.id} todo={todo}/>)
          })}
      </div>

    );
};

export default Todos;