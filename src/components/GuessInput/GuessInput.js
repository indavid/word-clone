import React from "react";

function GuessInput({ addGuess, status }) {
  const [currentGuess, setCurrentGuess] = React.useState("");
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        addGuess(currentGuess);
        console.log(currentGuess);
        setCurrentGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        disabled={status === "win" || status === "lose"}
        id="guess-input"
        type="text"
        name="currentGuess"
        minLength={5}
        maxLength={5}
        pattern="[A-Z]{5}"
        title="Guess must be in five letters"
        value={currentGuess}
        onChange={(event) => {
          setCurrentGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
