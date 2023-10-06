import React from "react";
import "./header.css";

//renders the heading and the topic
function Header () {
    return(
        <div className="header">
            <h2 className="heading">Let's Play Hangman</h2>
            <p className="topic">Guess the car brand?</p>
            
        </div>
    )
}

export default Header; 