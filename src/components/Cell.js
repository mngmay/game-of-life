import React, { useState } from "react";

const Cell = () => {
  const [active, setActive] = useState(false);

  return (
    <button
      className={`cell ${active && "active"}`}
      style={{ height: "25px", width: "25px", border: "1px solid green" }}
      onClick={() => {
        console.log("active");
        setActive(!active);
      }}
    ></button>
  );
};

export default Cell;
