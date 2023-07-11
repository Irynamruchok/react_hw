
import './App.css';
import {useEffect, useState} from "react";
import Users from "./components/users/Users";

const App = () =>{
  const [users, setUsers] = useState([])

useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
      .then(value => value.json())
      .then(value => setUsers(value))
},[])

  return (
    <div className="App">
      {users.map(user=><Users key={user.id} user={user}/>) }
    </div>
  );
}
export default App;
