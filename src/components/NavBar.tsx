import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";


const NavBar = () => {
  return (
    <div className="navContainer">
      <Link to="/" className="navLink">
        <h1>Inicio</h1>
      </Link>
      <Link to="/servicios" className="navLink">
        <h1>Servicios</h1>
      </Link>
      <Link to="/proytectos" className="navLink">
        <h1>Proyectos</h1>
      </Link>
      <Link to="/contacto" className="navLink">
        <h1>Contacto</h1>
      </Link>
    </div>
  );
};

export default NavBar;
