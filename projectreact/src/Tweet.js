import React from 'react';
import "./App.css";

function Tweet({name, message, tweets}){
    return(
        <div className="tweet">
            <h2>{name}</h2>
            <p>{message}</p>
            <h3>{tweets}</h3>
        </div>

    )
}

export default Tweet;