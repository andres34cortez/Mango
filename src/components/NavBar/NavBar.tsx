import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Box } from "jsxstyle";
import "./NavBar.css";

import Logo from "../../assets/Logo.png";

const NavBar = () => {
  const [active, serActive] = useState("/");

  return (
    <div className="navContainer">
      <div className="row">
        <img src={Logo} alt="" className="logo" />
        <Row>
          <Link
            to="/"
            className="navLink"
            style={{ color: active === "/" ? "#00ff66" : "#f5f5f5" }}
            onClick={() => serActive("/")}
          >
            <p>Inicio</p>
          </Link>
          <Link
            to="/servicios"
            className="navLink"
            style={{ color: active === "/servicios" ? "#00ff66" : "#f5f5f5" }}
            onClick={() => serActive("/servicios")}
          >
            <p>Servicios</p>
          </Link>
          {/* <Link
            to="/proyectos"
            className="navLink"
            style={{ color: active === "/proyectos" ? "#00ff66" : "#f5f5f5" }}
            onClick={() => serActive("/proyectos")}
          >
            <p>Proyectos</p>
          </Link> */}
          <Link
            to="/contacto"
            className="navLink"
            style={{ color: active === "/contacto" ? "#00ff66" : "#f5f5f5" }}
            onClick={() => serActive("/contacto")}
          >
            <p>Contacto</p>
          </Link>
        </Row>
      </div>
    </div>
  );
};

export default NavBar;
