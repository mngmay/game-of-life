import React, { useState, useEffect, useCallback } from "react";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Grid from "./components/Grid/Grid";
import Rules from "./components/SidePanel/Rules";
import Instructions from "./components/SidePanel/Instructions";
import Contact from "./components/SidePanel/Contact";
import Resources from "./components/SidePanel/Resources";
import ControlPanel from "./components/ControlPanel/ControlPanel";
import Patterns from "./components/Patterns/Patterns";
import { automata } from "./automata";
import Loader from "react-loader-spinner";

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

  const addGeneration = useCallback(() => {
    setGeneration(generation + 1);
  }, [generation]);

  const resetGrid = () => {
    setRunning(false);
    setGrid(makeGrid(ROWS, COLS));
    setGeneration(0);
  };

  const toggleGame = () => {
    setRunning(!running);
  };

  const triggerAutomata = useCallback(() => {
    let newGrid = automata(grid);
    if (JSON.stringify(grid) === JSON.stringify(newGrid)) {
      return;
    }
    addGeneration();
    setGrid(newGrid);
  }, [addGeneration, grid]);

  useEffect(() => {
    if (running) {
      let playing = setInterval(() => {
        triggerAutomata();
      }, speed);
      return () => clearInterval(playing);
    }
  }, [running, grid, speed, triggerAutomata]);

  return (
    <div className="App">
      <Header />
      <Dashboard>
        <section className="board">
          <h2 className={`generation`}>
            Generation: {generation}{" "}
            <div className="loading">
              {running && (
                <Loader
                  type="TailSpin"
                  color="black"
                  secondaryColor="black"
                  height={50}
                  width={50}
                  radius={10}
                />
              )}
            </div>
          </h2>
          <Grid grid={grid} toggleCell={toggleCell} running={running} />
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
        </section>
        <Patterns
          makeGrid={makeGrid}
          setGrid={setGrid}
          ROWS={ROWS}
          COLS={COLS}
          running={running}
          setGeneration={setGeneration}
        />
        <section className="sidePanel">
          <div className="top">
            <Rules />
            <Instructions />
            <Resources />
          </div>
          <Contact />
        </section>
      </Dashboard>
    </div>
  );
}

export default App;
