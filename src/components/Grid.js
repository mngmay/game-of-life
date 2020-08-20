import React, { useRef, useState } from "react";
import Cell from "./Cell";
import { v4 as uuidv4 } from "uuid";

const Grid = (props) => {
  const makeGrid = (rows, cols) => {
    return new Array(rows).fill(Array(cols).fill(0));
  };

  // initial grid state
  const [grid, setGrid] = useState(makeGrid(25, 25));

  return (
    <div className="grid" style={{ width: "625px", border: "1px solid black" }}>
      {grid.map((row, i) => (
        <div className="row" key={uuidv4()}>
          {row.map((col, j) => (
            <Cell key={uuidv4()} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
