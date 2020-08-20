import React from "react";
import ControlBtn from "./ControlBtn";

const ControlPanel = ({ reset }) => {
  return (
    <div className="controlPanel">
      <ControlBtn type="start" />
      <ControlBtn type="stop" />
      <ControlBtn type="slowdown" />
      <ControlBtn type="speedup" />
      <ControlBtn type="reset" action={reset} />
    </div>
  );
};

export default ControlPanel;
