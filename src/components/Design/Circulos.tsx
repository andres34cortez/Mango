import React from "react";
import "./Circulos.css";

interface Props {
  width: string;
  height: string;
  border: string;
}

const Circle = (props: Props) => {
  return (
    <div
      className="circleContainer"
      style={{
        maxWidth: `${props.width}`,
        maxHeight: `${props.height}`,
        border: `${props.border}`,
      }}
    />
  );
};

export default Circle;
