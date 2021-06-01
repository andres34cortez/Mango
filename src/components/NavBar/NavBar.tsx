import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Box } from "jsxstyle";
import "./NavBar.css";

import Logo from "../../assets/Logo.png";

const NavBar = () => {
  return (
    <div className="navContainer">
      <div className="row">
        <img src={Logo} alt="" className="logo" />
        <Row>
          <Link to="/" className="navLink">
            <p>Inicio</p>
          </Link>
          <Link to="/servicios" className="navLink">
            <p>Servicios</p>
          </Link>
          <Link to="/proytectos" className="navLink">
            <p>Proyectos</p>
          </Link>
          <Link to="/contacto" className="navLink">
            <p>Contacto</p>
          </Link>
        </Row>
      </div>
    </div>
  );
};

export default NavBar;
