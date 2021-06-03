import React from "react";
import Pantalla from "../../assets/Pantalla.png";
import { Row, Col, Box } from "jsxstyle";
import Texto from "./Textos";


interface Props {
  width: string;
  height: string;
  
  
  top?: string;
}

const Banner = (props: Props) => {
  return (
    <Row>
     <Row
      style={{
        position: "absolute",
        width: `${props.width}`,
        height: `${props.height}`,
        backgroundColor:"#1B007F",
        opacity:"0.5",
        left:"0vh",
        top: `${props.top}`,
        alignItems: "center",
        justifyContent: "center",
      }}
   />
      <Row style={{ 
          position: "absolute" , 
          top:"65.20vw",
          left:"50.62vw"}}>
        <img src={Pantalla} style={{width:"45vw",}} />
    
    </Row>
    <Row>

        <Texto
        titulo="¿Qué  es el  MANGO VERDE?"
        subtitulo="Somos una agencia de Marketing Digital, enfocada en ayudar a nuestros clientes a despegar sus emprendimientos y llevar su empresa al siguiente nivel!"
        top="77vw"
        left="13.9vw"
       efecto=""
        ></Texto>
    </Row>
    
    
    </Row>
  );
};

export default Banner;
