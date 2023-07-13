
import './App.css';
import UsersComponent from "./Components/UsersComponent/UsersComponent";
import {useState} from "react";
import PostList from "./Components/PostList/PostList";
const App =()=> {
const [selectedUserId, setSelectedUserId] = useState(null)
   const handleUserClick = (userId)=>{
    setSelectedUserId(userId)
   }
    return (
        <div>
<UsersComponent handleUserClick={handleUserClick} />
            {selectedUserId && <PostList userId={selectedUserId}/>}

        </div>
    );
}
export default App;
