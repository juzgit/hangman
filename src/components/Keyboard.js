import React from "react";
import "./keyboard.css"

//component represents a keyboard that displays the alphabet
const Keyboard = ({ onClick }) => {
    //splitting the alphabet into an array of letters
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    return (
        <div className="keyboard">
            {/* mapping through each letter in the alphabet array */}
            {alphabet.map((letter, index) => (
                //creating a button for each letter and assigning a click event handler
                <button key={index} onClick={() => onClick(letter)}>{letter}</button>
            ))}
        </div>
    );
};

export default Keyboard;