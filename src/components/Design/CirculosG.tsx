import React from "react";
import Rocket from "../../assets/Rocket.png";
import { Row, Col, Box } from "jsxstyle";
import Ring from "../../components/Design/Ring.tsx"

interface Props {
  width: string;
  height: string;
  color: string;
  right?: string;
  top?: string;
}

const CircleG = (props: Props) => {
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
    >
      <Row style={{ position: "absolute"  }}>
        <img src={Rocket} style={{width:"45vw",}} />
      </Row>
      <Row>
        <Ring  width="4.3vw"
         height="4.3vw"
         border="1.8vw solid #F5F5F5"
         position="absolute"
         top="60.4vw"
         left="28.16vw"
         opacity="0.3" />

      </Row>
      <Row>
        <Ring  width="7.08vw"
         height="7.08vw"
         border="3vw solid #F5F5F5"
         position="absolute"
         top="69.5vw"
         left="29.16vw"
         opacity="0.3" />
         

      </Row>
      <Row>
        <Ring  width="16.87vw"
         height="16.87vw"
         border="4.5vw solid #F5F5F5"
         position="absolute"
         top="79.86vw"
         left="35 vw"
         opacity="0.3" />
         

      </Row>
      <Row>
        <Ring  width="25vw"
         height="25vw"
         border="5vw solid #F5F5F5"
         position="absolute"
         top="90vw"
         left="60.1vw"
         opacity="0.3" />
         

      </Row>
    </Row>
  );
};

export default CircleG;
