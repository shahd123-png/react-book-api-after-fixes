import React from "react";
const BookImage = {
  width: "412px",
  height: "653px",
  borderRadius: "10px",
};

const Image = ({imgApi}) => {
  return <img src={imgApi} alt="hi" style={BookImage} />;
};

export default Image;
