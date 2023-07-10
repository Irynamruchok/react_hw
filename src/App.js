import logo from './logo.svg';
import './App.css';

import Posts from "./components/posts/Posts";
import Launches from "./components/Launches";


function App() {
  return (
    <div className="App">
        <Posts/>
        <Launches/>
    </div>
  );
}

export default App;
