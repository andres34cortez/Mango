import React from "react";
import "./Tarjeta.css";
import { Col } from "jsxstyle";

interface Props {
  imagen: string;
  title: string;
  children: React.ReactNode;
}

const Tarjeta = (props: Props) => {
  return (
    <Col className="tarjeta0">
      <div className="backImagen">
        <img src={props.imagen} alt="" className="imagen" />
      </div>
      <h1 className="title0">{props.title}</h1>
      <div className="text">{props.children}</div>
    </Col>
  );
};
export default Tarjeta;