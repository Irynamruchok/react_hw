import React, {useEffect, useState} from 'react';
import {GetServices} from "../../Services/Services";
import Todo from "../../Todo/Todo";

const Todos = () => {
const [todos, setTodos]=useState([])
    useEffect(()=>{
        GetServices.handleGetTodos(setTodos)
    },[])
    return (
          <Todo key={todos.id} todos={todos}/>

    );
};

export default Todos;