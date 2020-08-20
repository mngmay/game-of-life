import React, { useState, useEffect } from "react";
import Grid from "./components/Grid";
import Rules from "./components/Rules";
import ControlPanel from "./components/ControlPanel";

const ROWS = 25;
const COLS = 25;

const makeGrid = (rows, cols) => {
  return new Array(rows).fill([]).map((row) => new Array(cols).fill(false));
};

function App() {
  // initial grid state
  const [grid, setGrid] = useState(makeGrid(ROWS, COLS));
  // with every switch of grid, increase generation
  const [generation, setGeneration] = useState(1);

  const toggleCell = (x, y) => {
    let newGrid = [...grid];
    newGrid[x][y] = !newGrid[x][y];
    setGrid(newGrid);
  };

  const resetGrid = () => {
    setGrid(makeGrid(ROWS, COLS));
  };

  return (
    <div className="App">
      <Rules />
      Generation: {generation}
      <Grid width={ROWS} height={COLS} grid={grid} toggleCell={toggleCell} />
      <ControlPanel reset={resetGrid} />
    </div>
  );
}

export default App;
