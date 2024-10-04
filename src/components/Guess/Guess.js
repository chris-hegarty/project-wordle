import React from 'react';
import {range} from '../../utils';
import {checkGuess} from '../../game-helpers';
//"value" refers to the value of the guess.
//This is so we aren't using the same name for the component AND the prop.
//Also, you typically do NOT want more than one component in a file, unless...
//It's not needed outside the file
//It's short and concise.

function Cell({ letter, status }){
  const className = status ? `cell ${status}` : 'cell';
  return (
    <span className={className}>
        {letter}
    </span>
  );
}

function Guess({value, answer}) {
  const result = checkGuess(value, answer);

  return(
    <p className="guess">
      {range(5).map((num)=> (
          <Cell
            key={num}
            letter={result ? result[num].letter : undefined}
            status={result ? result[num].status : undefined}
          />
      ))}
    </p>
  );
}

export default Guess;
