import React from "react";

const ControlBtn = ({ action, type, speedLimit, running }) => {
  return (
    <button
      className={`ctrlBtn ${type} ${speedLimit ? "speedLimit" : "active"}`}
      onClick={action}
      disabled={running || speedLimit ? true : false}
    >
      {type}
    </button>
  );
};

export default ControlBtn;
