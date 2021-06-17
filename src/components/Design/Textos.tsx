import React from "react";
import "./Textos.css";
import useMediaQuery from "../MediaQuery";
interface Props {
  children?: React.ReactNode;
  subtitulo?: string;
  top?: string;
  left?: string;
  efecto?: string;
}

const Texto = (props: Props) => {
  const ipad=useMediaQuery('(max-widht:1000px)')
  return (
    
    <div
      style={{
        top: `${props.top}`,
        left: `${props.left}`,
        zIndex: 8,
        height: "11.18vw",
        width: "29.3vw",
        position: "absolute",
      }}
    >
      <h1 className="titulo1">{props.children}</h1>
      <h2 className="subtitulo1">{props.subtitulo}</h2>
    </div>
  );
};
export default Texto;
