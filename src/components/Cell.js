import React from "react";

const Cell = ({ toggle, cell, running }) => {
  return (
    <button
      className={`cell ${cell && "active"}`}
      onClick={toggle}
      disabled={running ? true : false}
    ></button>
  );
};

export default Cell;
