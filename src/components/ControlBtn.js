import React from "react";

const ControlBtn = ({ action, type, speedLimit }) => {
  return (
    <button
      className={`ctrlBtn ${type} ${speedLimit && "speedLimit"}`}
      onClick={action}
    >
      {type}
    </button>
  );
};

export default ControlBtn;
