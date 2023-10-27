import React from "react";

//takes in a prop called incorrectGuesses, which represents the number of incorrect guesses made in a Hangman game.
const Hangman = ({ incorrectGuesses }) => {
    //the maximum number of incorrect guesses allowed in the game.
    const maxIncorrectGuesses = 6;
    //contains the file paths to different Hangman images. 
    //Each image represents a different state of the Hangman drawing.
    const hangmanImages = [
        process.env.PUBLIC_URL + "./hangmandrawings/state5.gif", //default
        process.env.PUBLIC_URL + "./hangmandrawings/state6.gif",
        process.env.PUBLIC_URL + "./hangmandrawings/state7.gif",
        process.env.PUBLIC_URL + "./hangmandrawings/state8.gif",
        process.env.PUBLIC_URL + "./hangmandrawings/state9.gif",
        process.env.PUBLIC_URL + "./hangmandrawings/state10.gif",
        process.env.PUBLIC_URL + "./hangmandrawings/state11.gif"
    ];

    //calculate the image URL based on the number of incorrect guesses
    const imageUrl = 
    incorrectGuesses < maxIncorrectGuesses
     ? hangmanImages[incorrectGuesses]
     : hangmanImages[maxIncorrectGuesses - 1];

    //render the Hangman image with the appropriate URL
     return <img className="hangman" src={imageUrl} alt={`Hangman - ${incorrectGuesses} incorrect guesses`} />;
};

export default Hangman;