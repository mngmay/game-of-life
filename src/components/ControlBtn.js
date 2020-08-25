import React from "react";

const ControlBtn = ({ action, type, speedLimit, running }) => {
  return (
    <button
      className={`ctrlBtn ${type}`}
      onClick={action}
      disabled={running || speedLimit ? true : false}
    >
      {type}
    </button>
  );
};

export default ControlBtn;
