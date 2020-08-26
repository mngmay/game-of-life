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
        <li>In this version of the game, the edges are considered dead.</li>
      </ul>
    </div>
  );
};

export default Rules;
