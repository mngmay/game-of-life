import React from "react";

const Patterns = ({ makeGrid, setGrid, ROWS, COLS }) => {
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

  function populateGrid(coords) {
    let patternedGrid = makeGrid(width, height);
    coords.forEach((coord) => {
      let [x, y] = coord;
      patternedGrid[x][y] = true;
    });

    setGrid(patternedGrid);
  }

  return (
    <div>
      <button onClick={() => populateGrid(blinker)}>Blinker</button>
      <button onClick={() => populateGrid(pulsar)}>Pulsar</button>
    </div>
  );
};

export default Patterns;
