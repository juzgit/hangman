import React from "react";
import "./help.css";

//component for displaying the help content
//prop is used to handle the close functionality of the help content.
const Helpbtn = ({ onClose }) => {
    return(
            <div className="help-content">
                <h2>Hangman Rules</h2>
                <p>Guess the hidden word of the given topic by suggesting letters</p>
                <p>You only have 6 chances</p>
                <button className="close" onClick={onClose}>Close</button> {/**button to close the help content */}
            </div>
    );
};

export default Helpbtn;