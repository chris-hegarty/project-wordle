import React, {useState} from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import{NUM_OF_GUESSES_ALLOWED} from "../../constants";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  //We need a piece of state to hold an array of guesses the player made:
  const [guesses, setGuesses] = useState([]);
  //state for the status of the game/player. running, won or lost.
  const[gameStatus, setGameStatus] = useState('running');
  //Now we need a function to update the array when a guess is submitted AND evalute the game status.

  function handleSubmitGuess(tentativeGuess){
  //Common pattern here: "spread" the current array, add new item, return new array, store in variable, set with
    // variable:
    const updatedGuesses = [...guesses, tentativeGuess];
    setGuesses(updatedGuesses);

    if(tentativeGuess.toUpperCase() === answer){
      setGameStatus('won');
    } else if(updatedGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  }

  return (
      <main>

        <GuessResults guesses={guesses} answer={answer}   />
        <GuessInput gameStatus={gameStatus} handleSubmitGuess={handleSubmitGuess} />

        {gameStatus === 'won' && (
          <WonBanner
              numOfGuesses={guesses.length}
          >
          </WonBanner>
          )
        }
        {gameStatus === 'lost' && (
          <LostBanner
            answer={answer}
          >
          </LostBanner>
          )
        }
      </main>
  );
}

export default Game;
