
import './App.css';
import React from "react";
import Posts from "./Components/PostsClassComponent/Posts/Posts";
import Comments from "./Components/CommentsClassComponent/Comments/Comments";
import Cars from "./Components/CarsClassComponent/Cars/Cars";

function App() {
  return (
    <div className="App">
        <h1>Posts</h1>
        <Posts/>
        <h1>Comments</h1>
        <Comments/>
        <h1>Cars</h1>
        <Cars/>
    </div>
  );
}

export default App;
