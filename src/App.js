
import './App.css';
import TestUseMemo from "./Components/TestUseMemo/TestUseMemo";
import {useState} from "react";
import useToggle from "./Components/Hooks/UseToggle/useToggle";
import UserComponent from "./Components/UserComponent/UserComponent";
import ArrayComponent from "./Components/ArrayComponent/ArrayComponent";

function App() {
  const [data, setData] = useState(1)
  const [number, setNumber] = useState(1)
  const [isDarkMode,toggleDarkMode] = useToggle(false)

  return (
    <div className="App" style={{width:'100%', height:'100%', display:'flex',justifyContent:'space-between', flexDirection:'column',backgroundColor: isDarkMode? '#333' : '#fff', padding:'50px' }}>
        <div>
            <h3>{isDarkMode? 'Dark Mode' : 'Light Mode'}</h3>
            <button onClick={toggleDarkMode}>Change Background Color </button>
        </div>
<div>
      <TestUseMemo data={data} number={number} setData={setData} setNumber={setNumber}/>
</div>
        <div>
            <UserComponent/>
        </div>
        <div> <ArrayComponent/> </div>
    </div>
  );
}

export default App;
