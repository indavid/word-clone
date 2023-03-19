import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessList from "../GuessList";
import GuessInput from "../GuessInput";
import Banner from "../Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [status, setStatus] = React.useState("running");

  function addGuess(input) {
    const newGuessList = [...guessList, input];
    setGuessList(newGuessList);
    if (answer === input) {
      setStatus("win");
    } else {
      setStatus("running");
      if (newGuessList.length === 6) {
        setStatus("lose");
      }
    }
  }

  return (
    <>
      <Banner status={status} guessList={guessList} />
      <GuessList guessList={guessList} answer={answer} setStatus={setStatus} />
      <GuessInput addGuess={addGuess} status={status} />
    </>
  );
}

export default Game;
