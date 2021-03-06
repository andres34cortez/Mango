import React from "react";
import "./Rectangulo.css";

const Linea = () => {
  return <div className="Linea" />;
};

const Rectangulo = () => {
  return (
    <div className="todo">
      <div className="derecha">
        <Linea></Linea>
        <Linea></Linea>
        <Linea></Linea>
      </div>
      <div className="izquierda">
        <Linea></Linea>
        <Linea></Linea>
        <Linea></Linea>
      </div>
    </div>
  );
};
export default Rectangulo;
