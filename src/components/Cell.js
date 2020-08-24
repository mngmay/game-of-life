import React from "react";

const Cell = ({ toggle, cell, running, width, height }) => {
  return (
    <button
      className={`cell ${cell && "active"}`}
      style={{
        height: `${height}px`,
        width: `${width}px`,
      }}
      onClick={toggle}
      disabled={running ? true : false}
    ></button>
  );
};

export default Cell;
