import React from "react";

const Cell = ({ toggle, cell }) => {
  // TODO: if game is active, disable onClick of button

  return (
    <button
      className={`cell ${cell && "active"}`}
      style={{ height: "25px", width: "25px", border: "1px solid green" }}
      onClick={toggle}
    ></button>
  );
};

export default Cell;
