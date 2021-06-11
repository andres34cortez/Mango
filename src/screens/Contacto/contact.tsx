import React from "react";
import { Col, Row, Box } from "jsxstyle";
import Footer from "../../components/Design/Footer";



import Circle from "../../components/Design/Circulos";
import ModalContacto from "../../components/Design/ModalContacto";

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
      <Circle
          width="45vw"
          height="45vw"
          color="#C6ECE1"
          right="10vw"
          top="1vw"
        />
         <Circle
          width="60vw"
          height="60vw"
          color="#5000FF"
          right="50vw"
          top="1vw"
        />
      </Box>
      
    </Col>
  );
};
const Contacto = () => {
  return (
    <Col alignItems="center" zIndex={0}>

    <Circulos/>

    <Row
          justifyContent="center"
          paddingTop="10vw"
          alignItems="center"
          zIndex={1}
        >
          
          <Col marginLeft="1vw" marginTop="-3vw">
            <div>
              <h1 style={{ margin: 0, paddingBottom: "1vw" }}>
               Queremos<br /> Leerte
              </h1>
              <h2 style={{ margin: 0 }}>
              Puede ser solo un hola, puedes <br/> contarnos un proyecto que tengas en <br/> mente, una anécdota, alguna <br/>observación que tengas de nosotros,<br/> si te quieres quejar,  queremos leerte.

              </h2>
            </div>
          
          </Col>
          <Col marginLeft="17vw" marginTop="-3vw">
            <ModalContacto></ModalContacto>
          
          </Col>
        </Row>
       <Col padding="12vw">
        <Footer />
      </Col> 
    </Col>
  );
};

export default Contacto;
