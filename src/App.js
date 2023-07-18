
import './App.css';

import ChildOne from "./Components/ChildOne/ChildOne";
import ChildTwo from "./Components/ChildTwo/ChildTwo";
import {createContext, useState} from "react";

export const ChildContext = createContext({})
function App() {
    const [users,setUsers] = useState([])
  return (
    <div className="App">

<ChildContext.Provider  value={{users, setUsers }}>
    <ChildOne/>
    <ChildTwo/>
</ChildContext.Provider>


    </div>
  );
}

export default App;
