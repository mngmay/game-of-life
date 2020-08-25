import React from "react";

const Thumbnail = ({ pic }) => {
  return <img src={pic} alt={`${pic} Thumbnail`} className="thumbnail" />;
};

export default Thumbnail;
