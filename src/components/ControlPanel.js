import React from "react";
import ControlBtn from "./ControlBtn";

const ControlPanel = ({
  reset,
  toggleGame,
  running,
  setSpeed,
  speed,
  triggerAutomata,
}) => {
  return (
    <div className="controlPanel">
      <ControlBtn type={running ? "stop" : "start"} action={toggleGame} />
      <ControlBtn
        type="<<"
        speedLimit={speed >= 2000}
        action={() => speed < 2000 && setSpeed(speed + 500)}
      />
      Speed: {speed}ms
      <ControlBtn
        type=">>"
        speedLimit={speed <= 0}
        action={() => speed > 0 && setSpeed(speed - 500)}
      />
      <ControlBtn type="reset" action={reset} />
      <ControlBtn type="automata" action={triggerAutomata} />
    </div>
  );
};

export default ControlPanel;
