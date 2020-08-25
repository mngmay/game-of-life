import React from "react";

const Rules = () => {
  return (
    <div className="rules">
      <h2>Rules</h2>
      <ul>
        <li>Any live cell with two or three live neighbors survives.</li>
        <li>
          Any dead cell with exactly three live neighbors becomes a live cell.
        </li>
        <li>
          All other live cells die in the next generation. Similarly, all other
          dead cells stay dead.
        </li>
      </ul>
      <div className="contact">
        <span>GitHub</span>
        <a href="https://mayng.dev" rel="noopener noreferrer" target="_blank">
          Portfolio
        </a>
      </div>
    </div>
  );
};

export default Rules;
