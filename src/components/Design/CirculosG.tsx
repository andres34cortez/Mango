import React from "react";
import Rocket from "../../assets/Rocket.png";
import { Row, Col, Box } from "jsxstyle";
import Ring from "../../components/Design/Ring"
import useMediaQuery from "../../components/MediaQuery";
interface Props {
  width: string;
  height: string;
  color: string;
  right?: string;
  top?: string;
}

const CircleG = (props: Props) => {
  const mobile=useMediaQuery('(max-width:769px)');
  return (
    <Row
      className="circleContainer"
      style={{
        position: "absolute",
        width: `${props.width}`,
        height: `${props.height}`,
        backgroundColor: `${props.color}`,
        right: `${props.right}`,
        top: `${props.top}`,
        alignItems: "center",
        justifyContent: "center",
      }}
    > {mobile?(<Row style={{ position: "absolute"  }}>
    <img src={Rocket} style={{width:"55vw"}} />
  </Row>):(<Row style={{ position: "absolute"  }}>
        <img src={Rocket} style={{width:"45vw",}} />
      </Row>)}
      
      <Row>
        {mobile?(<Ring  width="8vw"
         height="8vw"
         border="2.5vw solid #F5F5F5"
         position="absolute"
         top="75vw"
         left="35vw"
         opacity="0.3" />):(<Ring  width="4.3vw"
         height="4.3vw"
         border="1.8vw solid #F5F5F5"
         position="absolute"
         top="60.4vw"
         left="28.16vw"
         opacity="0.3" />)}
        

      </Row>
      <Row>
        {mobile? (<Ring  width="16vw"
         height="16vw"
         border="5vw solid #F5F5F5"
         position="absolute"
         top="95vw"
         left="25vw"
         opacity="0.3" />):( <Ring  width="7.08vw"
         height="7.08vw"
         border="3vw solid #F5F5F5"
         position="absolute"
         top="69.5vw"
         left="29.16vw"
         opacity="0.3" />)}
       
         

      </Row>
      <Row>
      {mobile? (<Ring  width="28vw"
         height="28vw"
         border="8vw solid #F5F5F5"
         position="absolute"
         top="125vw"
         left="25vw"
         opacity="0.3" />):( 
        <Ring  width="16.87vw"
         height="16.87vw"
         border="4.5vw solid #F5F5F5"
         position="absolute"
         top="79.86vw"
         left="35 vw"
         opacity="0.3" />)}
         

      </Row>
      <Row>
      {mobile? (<Ring  width="35vw"
         height="35vw"
         border="10vw solid #F5F5F5"
         position="absolute"
         top="165vw"
         left="55vw"
         opacity="0.3" />):( 
        <Ring  width="25vw"
         height="25vw"
         border="5vw solid #F5F5F5"
         position="absolute"
         top="90vw"
         left="63.1vw"
         opacity="0.3" />)}
         

      </Row>
    </Row>
  );
};

export default CircleG;
