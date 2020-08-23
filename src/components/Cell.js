import React from "react";

const Cell = ({ toggle, cell, running }) => {
  return (
    <button
      className={`cell ${cell && "active"}`}
      style={{ height: "25px", width: "25px", border: "1px solid green" }}
      onClick={toggle}
      disabled={running ? true : false}
    ></button>
  );
};

export default Cell;
