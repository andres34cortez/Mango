import React from "react";
import { Col } from "jsxstyle";
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
    <Col
      style={{
        top: `${props.top}`,
        left: `${props.left}`,
        position: "absolute",
      }}
    >
      <div className="Button" onClick={props.onClick}>
        <h1 className="texto"> {props.text}</h1>
      </div>
      <h3>{props.comentario}</h3>
    </Col>
  );
};
export default Button;
