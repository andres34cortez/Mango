import React from "react";
import "./Footer.css";
import { Col, Row } from "jsxstyle";
import Logo2 from "../../assets/Logo2.png";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import { useLocation } from "react-router-dom";
import useMediaQuery from "../../components/MediaQuery";
const Footer = () => {
  const location = useLocation();
  const mobile=useMediaQuery('(max-width:768px)');  
  return (
    <Col
      className="Todo"
      // top={location.pathname === "/" ? "260vw" : "5vw"}
    >
      <Row flex="1" justifyContent="space-between">
      {mobile? (<Col className="columna" maxWidth="40vw">
          <img src={Logo2} alt="" className="Logo2" style={{ maxBlockSize:"15vw"}} />
          <Row className="rsociales" paddingLeft="10vw" maxWidth="1vw">
            <img src={instagram} style={{ maxBlockSize:"5vw"}} />
            <div style={{ marginRight: "1vw" }} />
            <img src={facebook} style={{ maxBlockSize:"5vw"}}/>
          </Row>
        </Col>):( <Col className="columna" maxWidth="30vw">
          <img src={Logo2} alt="" className="Logo2" style={{ maxBlockSize:"15vw"}} />
          <Row className="rsociales" paddingLeft="2.5vw" maxWidth="1vw">
            <img src={instagram} style={{ maxBlockSize:"5vw"}} />
            <div style={{ marginRight: "1vw" }} />
            <img src={facebook} style={{ maxBlockSize:"5vw"}}/>
          </Row>
        </Col>)}

        {mobile? (null): (<Col className="columna" maxWidth="45.7vw">
          <Row flex={1} alignItems="center" justifyContent="center">
            <Col className="columna1">
              <Row marginBottom="3vw">Inicio</Row>
              <Row marginBottom="3vw">Contacto</Row>
              <Row>Proyectos</Row>
            </Col>
            <div style={{ marginLeft: "8vw" }} />
            <Col className="columna1">
              <Row marginBottom="3vw">Servicios</Row>
              <Row marginBottom="3vw">Marketing</Row>
              <Row>Brandings</Row>
            </Col>
            <div style={{ marginLeft: "8vw" }} />
            <Col className="columna1" paddingTop="1.7vw">
              <Row marginBottom="1.4vw">Social Media</Row>
              <Row marginBottom="0.5vw" paddingTop="1vw">
                Desarrollo
                <br />
                WEB
              </Row>
              <Row marginTop="1vw">
                Desarrollo
                <br />
                SoftWare
              </Row>
            </Col>
          </Row>
        </Col>)}
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
