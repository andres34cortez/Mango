import React from "react";
import "./Tarjeta1.css";
import { Col } from "jsxstyle";

interface Props {
  imagen: string;
  title: string;
  children: React.ReactNode;
}

const Tarjeta1 = (props: Props) => {
  return (
    <Col className="tarjeta1">
      <img src={props.imagen} alt="" className="imagen" />
      <h1 className="title1">{props.title}</h1>
      <h3 className="text">{props.children}</h3>
    </Col>
  );
};
export default Tarjeta1;
