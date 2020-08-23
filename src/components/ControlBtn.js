import React from "react";

const ControlBtn = ({ action, type, speedLimit, running }) => {
  return (
    <button
      className={`ctrlBtn ${type} ${speedLimit && "speedLimit"}`}
      onClick={action}
      disabled={running ? true : false}
    >
      {type}
    </button>
  );
};

export default ControlBtn;
