import React from "react";
import PatternBtn from "./PatternBtn";

const Patterns = ({
  makeGrid,
  setGrid,
  ROWS,
  COLS,
  running,
  setGeneration,
}) => {
  let width = ROWS;
  let height = COLS;
  let middle = Math.floor(width / 2);

  let blinker = [
    [middle - 1, middle],
    [middle, middle],
    [middle + 1, middle],
  ];

  let pulsar = [
    [middle - 1, middle - 2],
    [middle - 1, middle + 3],
    [middle - 2, middle - 1],
    [middle - 1, middle - 2],
    [middle - 2, middle + 1],
    [middle - 1, middle + 2],
    [middle + 1, middle + 2],
    [middle + 2, middle + 1],
    [middle + 2, middle - 1],
    [middle + 1, middle - 2],
    [middle - 3, middle - 1],
    [middle - 4, middle - 1],
    [middle - 4, middle + 1],
    [middle - 3, middle + 1],
    [middle + 3, middle + 1],
    [middle + 4, middle + 1],
    [middle + 3, middle - 1],
    [middle + 4, middle - 1],
    [middle + 1, middle + 3],
    [middle + 1, middle + 4],
    [middle - 1, middle + 3],
    [middle - 1, middle + 4],
    [middle - 1, middle - 3],
    [middle - 1, middle - 4],
    [middle + 1, middle - 3],
    [middle + 1, middle - 4],
    [middle - 2, middle - 6],
    [middle - 3, middle - 6],
    [middle - 4, middle - 6],
    [middle - 2, middle + 6],
    [middle - 3, middle + 6],
    [middle - 4, middle + 6],
    [middle + 2, middle - 6],
    [middle + 3, middle - 6],
    [middle + 4, middle - 6],
    [middle + 2, middle + 6],
    [middle + 3, middle + 6],
    [middle + 4, middle + 6],
    [middle - 2, middle + 1],
    [middle - 1, middle + 2],
    [middle - 2, middle - 1],
    [middle - 1, middle - 2],
    [middle + 1, middle - 2],
    [middle + 2, middle - 1],
    [middle + 2, middle + 1],
    [middle + 1, middle + 2],
    [middle + 1, middle + 3],
    [middle + 1, middle + 4],
    [middle + 3, middle + 1],
    [middle + 4, middle + 1],
    [middle + 3, middle - 1],
    [middle + 4, middle - 1],
    [middle + 1, middle - 3],
    [middle + 1, middle - 4],
    [middle - 1, middle - 3],
    [middle - 1, middle - 4],
    [middle - 3, middle - 1],
    [middle - 4, middle - 1],
    [middle - 4, middle + 1],
    [middle - 3, middle + 1],
    [middle - 1, middle + 3],
    [middle - 1, middle + 4],
    [middle - 2, middle + 6],
    [middle - 3, middle + 6],
    [middle - 4, middle + 6],
    [middle - 2, middle - 6],
    [middle - 3, middle - 6],
    [middle - 4, middle - 6],
    [middle + 2, middle - 6],
    [middle + 3, middle - 6],
    [middle + 4, middle - 6],
    [middle + 2, middle + 6],
    [middle + 3, middle + 6],
    [middle + 4, middle + 6],
    [middle + 6, middle + 2],
    [middle + 6, middle + 3],
    [middle + 6, middle + 4],
    [middle + 6, middle - 2],
    [middle + 6, middle - 3],
    [middle + 6, middle - 4],
    [middle - 6, middle - 2],
    [middle - 6, middle - 3],
    [middle - 6, middle - 4],
    [middle - 6, middle + 2],
    [middle - 6, middle + 3],
    [middle - 6, middle + 4],
  ];

  let glider = [
    [2, 1],
    [1, 2],
    [1, 3],
    [0, 1],
    [2, 2],
    [2, 1],
  ];

  function populateGrid(coords) {
    let patternedGrid = makeGrid(width, height);
    coords.forEach((coord) => {
      let [x, y] = coord;
      patternedGrid[x][y] = true;
    });

    setGrid(patternedGrid);
  }

  return (
    <div className="patterns">
      <PatternBtn
        pattern={blinker}
        patternName="blinker"
        running={running}
        setGeneration={setGeneration}
        populateGrid={populateGrid}
      />

      <PatternBtn
        pattern={pulsar}
        patternName="pulsar"
        running={running}
        setGeneration={setGeneration}
        populateGrid={populateGrid}
      />
      <PatternBtn
        pattern={glider}
        patternName="glider"
        running={running}
        setGeneration={setGeneration}
        populateGrid={populateGrid}
      />
    </div>
  );
};

export default Patterns;
