import React  from "react";
import "./ModalContacto.css";
import { Col, Row } from "jsxstyle";
import Button from "../Button/button";

const ModalContacto = () => {

  return (
    <Col className="contenedor1">
      <Col className="contenedor2">
        <input className="input" type="text" placeholder="Nombre" />
        <input className="input" type="email" placeholder="Correo" />
        <textarea className="box" placeholder="Mensaje" />
        <Row
          alignItems="center"
          alignSelf="flex-start"
          paddingTop="0.7vw"
          paddingLeft="0.4vw"
        >
          <input type="checkbox" className="checkBox" />
          <div className="checkText"> Acepto los Terminos y<br/> condiciones</div>
        </Row>
        <Button text="Enviar" left="51.3vw" top="43.5vw"/>
      </Col>
    </Col>
  );
};

export default ModalContacto;
