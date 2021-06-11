import React from "react";

import { Row, Col, Box } from "jsxstyle";


interface Props {
  width: string;
  height: string;
  color?: string;
  right?: string;
  top?: string;
}

const Circle = (props: Props) => {
  return (
    <Row
      
      style={{
    
 
        
      
        position: "absolute",
        width: `${props.width}`,
        height: `${props.height}`,
        backgroundColor: `${props.color}`,
        right: `${props.right}`,
        top: `${props.top}`,
       opacity:0.6,
       borderRadius:"5000px"
      }}
    ></Row>
  
  );}


export default Circle;
