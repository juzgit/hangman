import React from "react";
import "./words.css";

//component renders the word with guessed letters
const Words = ({ word, guessedLetters }) => {

  return(
    <div className="words">
      {word.split('').map((letter, index) => (
        //if the letter has been guessed, display the letter, otherwise, display an underscore.
        <span key={index}>{guessedLetters.has(letter) ? letter : '_'}</span>
      ))}
    </div>
  );
};

export default Words;
