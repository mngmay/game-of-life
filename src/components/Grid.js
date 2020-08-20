import React from "react";
import Cell from "./Cell";
import { v4 as uuidv4 } from "uuid";

const Grid = ({ grid, toggleCell }) => {
  return (
    <div className="grid" style={{ width: "625px", border: "1px solid black" }}>
      {grid.map((row, i) => (
        <div className="row" key={uuidv4()}>
          {row.map((cell, j) => (
            <Cell
              key={uuidv4()}
              cell={cell}
              toggle={(e) => {
                toggleCell(i, j);
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
