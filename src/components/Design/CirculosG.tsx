import React from "react";
import Rocket from "../../assets/Rocket.png";
import { Row, Col, Box } from "jsxstyle";


interface Props {
  width: string;
  height: string;
  color: string;
  rigth?: string;
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
        right: `${props.rigth}`,
        top: `${props.top}`,
        
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Row style={{ position: "absolute" }}>
        <img src={Rocket} />
      </Row>
    </Row>
  );
};

export default CircleG;
