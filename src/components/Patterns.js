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
  // Grid coords
  let width = ROWS;
  let height = COLS;
  let middle = Math.floor(width / 2);

  // Pattern types
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

  let random = createRandom();

  // Helper functions

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  // creates a random list of coordinates for Random pattern
  function createRandom() {
    let randomCoords = [];

    for (let i = 0; i < getRandomInt(15); i++) {
      randomCoords.push([getRandomInt(width), getRandomInt(height)]);
    }

    return randomCoords;
  }

  // creates grid of coordinates based on input pattern
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
      <PatternBtn
        pattern={random}
        patternName="random"
        running={running}
        setGeneration={setGeneration}
        populateGrid={populateGrid}
      />
    </div>
  );
};

export default Patterns;
