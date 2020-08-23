import React from "react";

const Patterns = ({ makeGrid, setGrid, ROWS, COLS, running }) => {
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
      <button
        className="patternBtn"
        onClick={() => populateGrid(blinker)}
        disabled={running ? true : false}
      >
        Blinker
      </button>
      <button
        className="patternBtn"
        onClick={() => populateGrid(pulsar)}
        disabled={running ? true : false}
      >
        Pulsar
      </button>
      <button
        className="patternBtn"
        onClick={() => populateGrid(glider)}
        disabled={running ? true : false}
      >
        Glider
      </button>
    </div>
  );
};

export default Patterns;
