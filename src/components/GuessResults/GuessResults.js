import React, {useState} from 'react';
import Guess from '../Guess';
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";
import {range} from '../../utils';

//We only want to show the guess once it is submitted.
//Note: You have to use parens in the map function b/c you are returning an expression.

//NOTE: We don't use "answer" directly in here.
//We are "prop drilling" from "Game", through here, down the the "Guess" component.
function GuessResults({ guesses, answer }) {

  return (
    <section className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map( (num) => (
        <Guess key={num} value={guesses[num]} answer={answer} />
      ))}
    </section>
  );
}

export default GuessResults;
