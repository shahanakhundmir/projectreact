import React, {useState} from 'react';
import Tweet from "./Tweet";
import "./App.css";

function App() {

  const [users, setUsers] = useState(
    [{name: "jo", message :"Hello Jo ", tweets: "4"},
    {name: "mo", message :"Hello mo ", tweets: "2"},
    {name: "po", message :"Hello po ", tweets: "9"}]
    );

return (
  <div className="app">
    {users.map(user => (
      <Tweet name= {user.name} message = {user.message} tweets = {user.tweets}/>
    ))}
  </div>
);
}

export default App;
