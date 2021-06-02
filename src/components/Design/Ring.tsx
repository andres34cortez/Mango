import React from "react";
import "./Ring.css";

interface Props {
  width: string;
  height: string;
  border: string;
  position?: string;
  left?: string;
  top?: string;
  opacity?:string;
}

const Circle = (props: Props) => {
  return (
    <div
      className="circleContainer"
      style={{
        width: `${props.width}`,
        height: `${props.height}`,
        border: `${props.border}`,
        position: `${props.position}`,
        left: `${props.left}`,
        top: `${props.top}`,
        opacity:`${props.opacity}`
      }}
    />
  );
};

export default Circle;
