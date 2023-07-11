import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import Users from "./components/users/Users";

const App = () =>{
  const [users, setUsers] = useState([])
useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
      .then(value => value.json())
      .then(value => useState(value))
})

  return (
    <div className="App">
        {users.map(users) }

    </div>
  );
}

export default App;
