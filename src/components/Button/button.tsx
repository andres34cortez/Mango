import React from "react";
import "./button.css";

interface Props {
  text?: string;
  comentario?: string;
  top?: string;
  left?: string;
  onClick?: () => void;
}
const Button = (props: Props) => {
  return (
    <div
      className="Button"
      onClick={props.onClick}
      style={{
        top: `${props.top}`,
        left: `${props.left}`,
        position: "absolute",
      }}
    >
      <h1 className="texto"> {props.text}</h1>
      <h3>{props.comentario}</h3>
    </div>
  );
};
export default Button;
