import React from "react";
import ControlBtn from "./ControlBtn";
import { automata } from "../automata";

const ControlPanel = ({ reset, grid, setGrid }) => {
  return (
    <div className="controlPanel">
      <ControlBtn type="start" />
      <ControlBtn type="stop" />
      <ControlBtn type="slowdown" />
      <ControlBtn type="speedup" />
      <ControlBtn type="reset" action={reset} />
      <ControlBtn
        type="automata"
        action={() => {
          let newGrid = automata(grid);
          setGrid(newGrid);
        }}
      />
    </div>
  );
};

export default ControlPanel;
