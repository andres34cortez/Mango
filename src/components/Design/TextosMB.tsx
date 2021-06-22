import React from "react";
import "./TextosMB.css";
import useMediaQuery from "../MediaQuery";
interface Props {
  children?: React.ReactNode;
  subtitulo?: string;
  top?: string;
  left?: string;
  efecto?: string;
}

const TextoMB = (props: Props) => {
  const ipad=useMediaQuery('(max-widht:1000px)')
  return (
    
    <div
      style={{
          
        top: `${props.top}`,
        left: `${props.left}`,
        zIndex: 8,
        position: "absolute",
      }}
    >    
      <p className="titmobile"> Juntos hacemos que <br/>tu marca despegue <br/> y suba de nivel</p>
      <p className="submobile">Con estrategias de Branding, <br></br>Marketing y el poder del Diseño</p>
    </div>
  );
};
export default TextoMB;
