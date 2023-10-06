//imports several other components such as Words, Keyboard, Hangman, and Helpbtn.
import React, {useState} from 'react';
import Words from './Words';
import Keyboard from './Keyboard';
import Hangman from './Hangman';
import Helpbtn from './Help';
import "./game.css";

const wordToGuess = [
    'bmw',
    'ford',
    'porsche',
    'chevrolet',
    'audi',
    'hyundai',
    'bentley',
    'tesla',
    'cadillac',
    'buick',
    'jeep',
    'mercedes',
    'lexus',
    'lamborghini',
    'dodge',
    'toyota',
    'nissan',
    'honda',
    'renault',
    'ferrari',
    'volkswagen'
];

//function to generate a random word from the array
const randomWord = () => {
    const wordIndex = Math.floor(Math.random() * wordToGuess.length);
    return wordToGuess[wordIndex];
}

const Game = () => {
    const [wordToGuess, setwordToGuess] = useState(randomWord()); //stores the word to guess
    const [correctGuess, setcorrectGuess] = useState(new Set()); //stores the correct guesses
    const [incorrectGuess, setIncorrectGuess] = useState(0); //stores the number of incorrect guesses
    const [guessedLetters, setGuessedLetters] = useState(new Set()); //stores the guessed letters
    const [helpOpen, setHelpOpen] = useState(false); //stores the state of the help button

    //function to toggle the help button
    const openHelp = () => {
        setHelpOpen(!helpOpen);
    }

    //function to handle the user's guess
    const handleguess = (letter) => {
        if(guessedLetters.has(letter)){
            return;
        }
        setGuessedLetters(new Set([...guessedLetters, letter]));

        if(wordToGuess.includes(letter)){
            setcorrectGuess(new Set([...correctGuess, letter]));
        }else {
            setIncorrectGuess(incorrectGuess + 1);
        }
    };

    //check if the user has won the game
    const hasWon = wordToGuess.split('').every((letter) => correctGuess.has(letter));
    //checks if the game is over (either the user has won or has made too many incorrect guesses).
    const doneGame = hasWon || incorrectGuess >= 6;

    //function to restart the game
    const handleRestartGame = () => {
        setwordToGuess(randomWord());
        setcorrectGuess(new Set());
        setIncorrectGuess(0);
        setGuessedLetters(new Set());
    };

   //renders the hangman game interface. 
   //it displays the hangman figure, the word to guess with the correctly guessed letters, the guessed letters, and buttons for guessing, restarting, and getting help.

    return(
        <div className='game'>
            <Hangman incorrectGuesses={incorrectGuess} />

            {/**displays the underscores for the word that needs to be guessed */}
            <Words word={wordToGuess}  guessedLetters={correctGuess} />
            <div className='guessed-letters'>
                <p className='guess'>Guessed letters: {Array.from(guessedLetters).join("_ ")}</p>
            </div>

            {/**keyboard */}
            {!hasWon && incorrectGuess < 6 && <Keyboard onClick={handleguess} />}

            {/**option for the user to restart the game before it is over */}
            {!doneGame && <button className='reset-btn' onClick={handleRestartGame}>Restart</button>}

            {/**help button */}
            <button className='help-btn' onClick={openHelp}>Help</button>
            {helpOpen && <Helpbtn onClose={openHelp} />}

            {/**messages lost or won */}
            {hasWon && <div className='message'>You won! </div>}
            {!hasWon && incorrectGuess >= 6 && <div className='message'>You lost! The word was {wordToGuess}.</div>}

            {/**restart button when the game is over */}
            {hasWon || incorrectGuess >= 6 ? (
                <button className='reset-btn' onClick={handleRestartGame}>Restart</button>
            ): null}
        </div>
    );
};

export default Game;