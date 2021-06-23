import React  from "react";
import "./ModalContacto.css";
import { Col, Row, Box } from "jsxstyle";
import Button from "../Button/button";
import Circle from "./Circulos";
import useMediaQuery from "../../components/MediaQuery";
const Circulos = () => {
  const mobile=useMediaQuery('(max-width:768px)');
  return (
    <Col
      position="absolute"
      top={0}
      left={0}
      right={0}
      bottom={0}
      zIndex={0}
    >
      <Box position="relative" flex="1" zIndex={-1000000} opacity="0.8">
     {mobile ? null: <Circle
          width="10vw"
          height="10vw"
          color="#5000FF"
          right="38vw"
          top="13vw"
          
        />}
        {mobile ? null:  <Circle
           width="20vw"
          height="20vw"
          color="#5000FF"
          right="10vw"
          top="30vw"
        />}
      </Box>
    </Col>
  );
};


const ModalContacto = () => {
  const mobile=useMediaQuery('(max-width:768px)');
  return (

    <Col className="contenedorC" >
        <Circulos/>
      <Col className="contenedor2"zIndex={1}>
        <input className="input" type="text" placeholder="Nombre" />
        <input className="input" type="email" placeholder="Correo" />
        <textarea className="box" placeholder="Mensaje" />
        
        {mobile? <Row
          alignItems="center"
          alignSelf="flex-start"
          justifyContent='space-between'
          style={{width: '98%'}}
          paddingTop="0.7vw"
        > 
        <Row paddingLeft='2%'>
          <input type="checkbox" className="checkBox" />
          <div className="checkText"> Acepto los Terminos y<br/> condiciones</div>
          </Row>
          <button className="botonModalcont" >Enviar</button>
        </Row>: <Row
          alignItems="center"
          alignSelf="flex-start"
          paddingTop="0.7vw"
        > 
          <input type="checkbox" className="checkBox" />
          <div className="checkText"> Acepto los Terminos y<br/> condiciones</div>
          
        </Row>}
        {mobile?null:<button className="botonModalcont" >Enviar</button>}
      </Col>
    </Col>
  );
};

export default ModalContacto;
