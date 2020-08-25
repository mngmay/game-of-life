import React from "react";

const PatternBtn = ({
  pattern,
  patternName,
  running,
  setGeneration,
  populateGrid,
}) => {
  return (
    <button
      className="patternBtn"
      onClick={() => {
        populateGrid(pattern);
        setGeneration(0);
      }}
      disabled={running ? true : false}
    >
      {patternName}
    </button>
  );
};

export default PatternBtn;
