import React from "react";
import "./Textos.css";

interface Props {
  children?: React.ReactNode;
  subtitulo: string;
  top: string;
  left: string;
  efecto?: string;
}

const Texto = (props: Props) => {
  return (
    <div
      style={{
        top: `${props.top}`,
        left: `${props.left}`,
        zIndex: 8888,
        height: "11.18vw",
        width: "29.3vw",
        position: "absolute",
      }}
    >
      <h1>{props.children}</h1>
      <h2>{props.subtitulo}</h2>
    </div>
  );
};
export default Texto;
