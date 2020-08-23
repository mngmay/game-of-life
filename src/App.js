import React, { useState, useEffect } from "react";
import Grid from "./components/Grid";
import Rules from "./components/Rules";
import ControlPanel from "./components/ControlPanel";
import Patterns from "./components/Patterns";
import { automata } from "./automata";

const ROWS = 25;
const COLS = 25;

const makeGrid = (rows, cols) => {
  return new Array(rows).fill([]).map(() => new Array(cols).fill(false));
};

function App() {
  // initial grid state
  const [grid, setGrid] = useState(makeGrid(ROWS, COLS));
  // with every switch of grid, increase generation
  const [generation, setGeneration] = useState(1);
  const [running, setRunning] = useState(false);
  const [speed, setSpeed] = useState(1000); // default to 1 sec

  const toggleCell = (x, y) => {
    let newGrid = [...grid];
    console.log([x, y]);
    newGrid[x][y] = !newGrid[x][y];
    setGrid(newGrid);
  };

  const addGeneration = () => {
    setGeneration(generation + 1);
  };

  const resetGrid = () => {
    setRunning(false);
    setGrid(makeGrid(ROWS, COLS));
    setGeneration(0);
  };

  const toggleGame = () => {
    setRunning(!running);
  };

  const triggerAutomata = () => {
    let newGrid = automata(grid);
    addGeneration();
    setGrid(newGrid);
  };

  useEffect(() => {
    if (running) {
      let playing = setInterval(() => {
        triggerAutomata();
      }, speed);
      return () => clearInterval(playing);
    }
  }, [running, grid]);

  return (
    <div className="App">
      <Rules />
      Generation: {generation}
      <Grid
        width={ROWS}
        height={COLS}
        grid={grid}
        toggleCell={toggleCell}
        running={running}
      />
      <Patterns
        makeGrid={makeGrid}
        setGrid={setGrid}
        ROWS={ROWS}
        COLS={COLS}
        running={running}
        setGeneration={setGeneration}
      />
      <ControlPanel
        reset={resetGrid}
        setGeneration={setGeneration}
        addGeneration={addGeneration}
        triggerAutomata={triggerAutomata}
        grid={grid}
        setGrid={setGrid}
        toggleGame={toggleGame}
        running={running}
        setSpeed={setSpeed}
        speed={speed}
      />
    </div>
  );
}

export default App;
