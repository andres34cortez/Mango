import React from "react";
import "./TextosMB2.css";
import useMediaQuery from "../MediaQuery";
import { Flex } from "jsxstyle";
interface Props {
  children?: React.ReactNode;
  subtitulo?: string;
  top?: string;
  left?: string;
  efecto?: string;
}

const TextoMB2 = (props: Props) => {
  const ipad=useMediaQuery('(max-widht:1000px)')
  return (
    
    <div
      style={{
        top: `${props.top}`,
        left: `${props.left}`,
        zIndex: 8,
        height: "37.2vw",
        width: "80vw",
       
       position:"absolute",
        padding:"0vw 10vw",

        
      }}
    >
      <p className="Que">{props.children}</p>
      <p className="sub">{props.subtitulo}</p>
    </div>
  );
};
export default TextoMB2;
