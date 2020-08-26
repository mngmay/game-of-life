import React from "react";

const Instructions = () => {
  return (
    <div className="instructions">
      <h2>How To Play</h2>
      <ul>
        <li>Select cells to create a pattern, or select a preset pattern.</li>
        <li>
          <span className="playType">Manual Play:</span> Select "Automata" to
          walk through each generation at your own pace.
        </li>
        <li>
          <span className="playType">Auto Play:</span> Select "Start" for an
          animation.
        </li>
        <li>
          Players can pause the animation at any time by selecting "Stop".
        </li>
        <li>Select "Reset" to clear the board and start fresh.</li>
      </ul>
    </div>
  );
};

export default Instructions;
