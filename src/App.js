
import './App.css';

import ChildOne from "./Components/ChildOne/ChildOne";
import ChildTwo from "./Components/ChildTwo/ChildTwo";
import {createContext} from "react";

const initial ={title:"", users:[]}
export const ChildContext = createContext(initial)
function App() {
  return (
    <div className="App">

<ChildContext.Provider  value={initial}>

    <ChildOne/>
    <ChildTwo/>

</ChildContext.Provider>


    </div>
  );
}

export default App;
