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
      <div className="backImagen">
        <img src={props.imagen} alt="" className="imagen" />
      </div>
      <h1 className="title1">{props.title}</h1>
      <div className="text">{props.children}</div>
    </Col>
  );
};
export default Tarjeta1;
