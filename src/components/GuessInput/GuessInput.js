import React, {useState} from 'react';

function GuessInput({ handleSubmitGuess, gameStatus }) {
  const [tentativeGuess, setTentativeGuess] = useState('');

  function handleSubmit(e){

    e.preventDefault();
    console.log("You entered: ", {tentativeGuess});

    handleSubmitGuess(tentativeGuess);

    setTentativeGuess('');
  }

  return (
    <section className="input-section">
      <form
        className="guess-input-wrapper"
        onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter Guess:</label>
        <input
          required
          disabled={gameStatus !== 'running'}
          pattern="[a-zA-Z]{5}"
          title="5-letter word."
          id="guess-input"
          type="text"
          value={tentativeGuess}
          onChange={(e) => {
            const nextGuess = e.target.value.toUpperCase();
            setTentativeGuess(nextGuess);
          }}
        />
      </form>
    </section>
  );
}

export default GuessInput;
