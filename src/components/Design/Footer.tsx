import { Col, Row } from "jsxstyle";
import React from "react";
import "./Footer.css";
import Logo from "../../assets/Logo.png";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png"

const Footer = () => {
  return (
    <Col className="Todo">
      <Row flex="1" justifyContent="space-between">
        <Col className="columna" maxWidth="22.36vw">
          <img src={Logo} alt="" className="icono" />
          <div className="textoF">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </div>
          <div className="rsociales">
            <img src={instagram}></img>
            <img src={facebook}></img>
          </div>
        </Col>
        <Col className="columna" maxWidth="45.7vw">
          <Col className="columna11">
            <Row>Inicio</Row>
            <Row>Contacto</Row>
            <Row>Proyectos</Row>
          </Col>
          <Col className="columna12">
            <Row>Servicios</Row>
            <Row>Marketing</Row>
            <Row>Brandings</Row>
          </Col>
          <Col className="columna13">
            <Row>Social Media</Row>
            <Row>
              Desarrollo
              <br />
              WEB
            </Row>
        
            <Row>
              Desarrollo
              <br />
              SoftWare
            </Row>
          </Col>
        </Col>
      </Row>
      <Row justifyContent="space-between" className="links">
        <p className="terminos">
          Terminos y Condiciones de uso | Politica de privacidad
        </p>
        <p className="site">www.mangoverde.site</p>
      </Row>
    </Col>
  );
};

export default Footer;
