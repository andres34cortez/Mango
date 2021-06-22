import React from "react";
import Pantalla from "../../assets/Mega.png";
import { Row, Col, Box } from "jsxstyle";
import Texto from "./Textos";
import useMediaQuery from "../../components/MediaQuery";
import TextoMB2 from "./TextosMB2"
interface Props {
  width: string;
  height: string;

  top?: string;
}

const Banner = (props: Props) => {
  const mobile=useMediaQuery('(max-width:768px)');  
  return (
    <Row>
      {mobile?   (<Row
        style={{
          position: "absolute",
          width: `${props.width}`,
          height: `${props.height}`,
          backgroundColor: "#1B007F",
          opacity: "1",
          left: "0vh",
          top: `${props.top}`,
          alignItems: "center",
          justifyContent: "center",
          }} />)
 
        :
        (<Row
        style={{
          position: "absolute",
          width: `${props.width}`,
          height: `${props.height}`,
          backgroundColor: "#1B007F",
          opacity: "0.5",
          left: "0vh",
          top: `${props.top}`,
          alignItems: "center",
          justifyContent: "center",
        }}
      />)
        }
        
        {mobile?   (null):(<Row
        style={{
          position: "absolute",
          top: "65.20vw",
          left: "50.62vw",
        }}
      >
        <img src={Pantalla} style={{ margin:"1.8vw",width: "38vw" }} />
      </Row>)}
      
      {mobile?  
       (<Row>
       <TextoMB2
          subtitulo="¡Nuestro enfoque es ayudar a nuestros clientes a despegar sus negocios y llevar su empresa al siguiente nivel, somos más que una agencia de Marketing Digital!"
          top="125vw"
          left="0vw"
          efecto=""
        >
          ¿Qué es 
          <span style={{ color: "#00FF66" }}> MANGO VERDE</span>?
        </TextoMB2>     
      </Row>)
      :
      (  <Row>
        <Texto
          subtitulo="¡Nuestro enfoque es ayudar a nuestros clientes a despegar sus negocios y llevar su empresa al siguiente nivel, somos más que una agencia de Marketing Digital!"
          top="77vw"
          left="13.9vw"
          efecto=""
        >
          ¿Qué es <br />
          <span style={{ color: "#00FF66" }}>MANGO VERDE</span>?
        </Texto>
      </Row>)}
    </Row>
  );
};

export default Banner;
