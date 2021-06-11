import React from "react";
import "./ModalHome.css";
import { Col, Row } from "jsxstyle";
import Button from "../Button/button";

const ModalHome = () => {
  return (
    <Col className="contenedor1">
      <Col className="contenedor2">
        <input className="input3" type="text" placeholder="Nombre" />
        <input className="input3" type="email" placeholder="Correo" />
        <input className="input4" type="text" placeholder="Fecha D/M/A" />
        <input className="input4" type="text" placeholder="Hora" />
        <Row
          alignItems="center"
          justifyContent="center"
          paddingTop="0.7vw"
          paddingLeft="0.4vw"
        >
          <input type="checkbox" className="checkBox" />
          <div className="checkText">
            Acepto los Terminos y<br /> condiciones
          </div>
        </Row>
        <Button text="Enviar" left="9.9vw" top="27vw" />
      </Col>
    </Col>
  );
};

export default ModalHome;
