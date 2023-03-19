import React from "react";

function Banner({ status, guessList }) {
  if (status === "win") {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>{guessList.length} guesses</strong>.
        </p>
      </div>
    );
  } else if (status === "lose") {
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>LEARN</strong>.
        </p>
      </div>
    );
  } else {
    return <></>;
  }
}

export default Banner;
