import React from "react";
import Cell from "./Cell";
import { v4 as uuidv4 } from "uuid";

const Grid = ({ grid, toggleCell, running, height, width }) => {
  return (
    <div
      className="grid"
      style={{
        height: `${height * width}px`,
        width: `${height * width}px`,
      }}
    >
      {grid.map((row, i) => (
        <div className="row" key={uuidv4()}>
          {row.map((cell, j) => (
            <Cell
              key={uuidv4()}
              cell={cell}
              running={running}
              height={height}
              width={width}
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
