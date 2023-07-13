
import './App.css';
import UserComponent from "./components/usercomponent/UserComponent";
import {useEffect, useState} from "react";

const App =()=> {
    {
        const [users, setUsers] = useState([])
        const [selectedUserId, setSelectedUserId] = useState(null)
        const [posts, setPosts] = useState([])

        useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(value => value.json())
                .then(value => setUsers(value))
        }, [])
        const handleShowPosts = (userId) => {
            setSelectedUserId(userId);
        }
        useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/posts?userId=${userId}`')
                .then(value => value.json())
                .then(value => setPosts())
        })

    }

    return (
        <div>
            <h1>Users</h1>


        </div>
    );
}
export default App;
