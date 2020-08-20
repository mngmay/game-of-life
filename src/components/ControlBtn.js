import React from "react";

const ControlBtn = ({ action, type }) => {
  return (
    <button className={`ctrlBtn ${type}`} onClick={action}>
      {type}
    </button>
  );
};

export default ControlBtn;
