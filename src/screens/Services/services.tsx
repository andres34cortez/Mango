import React from "react";
import { Col, Row, Box } from "jsxstyle";
import Footer from "../../components/Design/Footer";
import Texto from "../../components/Design/Textos";
import Tarjeta from "../../components/Design/Tarjeta";
import Marketing from "../../assets/Marketing.png";
import Branding from "../../assets/Branding.png";
import Desarrollo from "../../assets/Desarrollo.png";
import Desarrollo2 from "../../assets/Desarrollo2.png";
import Social from "../../assets/Social.png";
import Rebranding from "../../assets/Rebranding.png";
import Ring from "../../components/Design/Ring";
import Circle from "../../components/Design/Circulos";
const Circulos = () => {
  return (
    <Col
      position="absolute"
      top={0}
      left={0}
      right={0}
      bottom={0}
    
      zIndex={0}
    >
      <Box position="relative" flex="1" zIndex={-1000000}>
        <Ring
            width="40vw"
            height="40vw"
            border="8vw solid #F5F5F5"
            opacity="0.1"
            position="absolute"
            top="30vw"
            left="40vw"


         
        ></Ring>
        <Ring
          width="20vw"
          height="20vw"
          border="5vw solid #F5F5F5"
          position="absolute"
          top="1vw"
          left="80vw"
          opacity="0.1"
        />
         <Circle
          width="90vw"
          height="90vw"
          color="#5000FF"
          right="-10vw"
          top="1vw"
        />
      </Box>
    </Col>
  );
};
const Servicios = () => {
  return (
   
    <Col>
    
      <Circulos />
 

      <Col alignItems="center" zIndex={0}>
          <Row justifyContent="flex-end" style={{ marginLeft: "-13.5vw" }}>
            <Texto>Servicios</Texto>
          </Row>
          <Row paddingTop="11vw">
            <div style={{ marginRight: "2vw" }} />
            <Tarjeta imagen={Marketing} title="Marketing">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </Tarjeta>
            <div style={{ marginRight: "4vw" }} />
            <Tarjeta imagen={Branding} title="Branding">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </Tarjeta>
            <div style={{ marginRight: "4vw" }} />
            <Tarjeta imagen={Desarrollo} title="Desarrollo WEB">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </Tarjeta>
          </Row>
          <Row paddingTop="3vw">
            <div style={{ marginRight: "2vw" }} />
            <Tarjeta imagen={Social} title="Social">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </Tarjeta>
            <div style={{ marginRight: "4vw" }} />
            <Tarjeta imagen={Rebranding} title="Branding">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </Tarjeta>
            <div style={{ marginRight: "4vw" }} />
            <Tarjeta imagen={Desarrollo2} title="Desarrollo APPs">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </Tarjeta>
          </Row>
        </Col>




      <Col padding="7vw">
        <Footer />
      </Col>  

    </Col>
  )
};

export default Servicios;
