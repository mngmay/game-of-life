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
  // For buttons that need to be disabled during animation, pass running prop
  return (
    <div className="controlPanel">
      <ControlBtn type={running ? "stop" : "start"} action={toggleGame} />
      <ControlBtn
        type="<<"
        speedLimit={speed >= 2000}
        action={() => speed < 2000 && setSpeed(speed + 500)}
      />
      <span>Speed: {`${((1 / speed) * 1000).toFixed(1)}x`}</span>
      <ControlBtn
        type=">>"
        speedLimit={speed <= 0}
        action={() => speed > 0 && setSpeed(speed - 500)}
      />
      <ControlBtn type="reset" action={reset} />
      <ControlBtn type="automata" action={triggerAutomata} running={running} />
    </div>
  );
};

export default ControlPanel;
