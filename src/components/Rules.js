import React from "react";

const Rules = () => {
  return (
    <div>
      <h1>Conway's Rules</h1>
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
    </div>
  );
};

export default Rules;
