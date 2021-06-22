import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { Row, Col } from "jsxstyle";
import useMediaQuery from "../MediaQuery";
import Open from "../../assets/open.png"
import Logo from "../../assets/Logo.png";
import Logomob from "../../assets/Logomob.png"

const MenuMobile = (props: {onClick: () => void}) => {
  const [active, serActive] = useState("/");
return (
  <Col>
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
    <div onClick={props.onClick}>CERRAR</div>
  </Col>
)
}

const NavBar = () => {
  const [active, serActive] = useState("/");
  const [openMenu, setOpenMenu] = useState(false)
  const mobile = useMediaQuery("(max-width: 1000px)");

  return (
    <div className="navContainer">
      {openMenu ? 
      <Col className="menuContainer">
        <div className="row">
          <img src={Logo} alt="" className="logo" />
          {mobile ? (
            
            <Row border="1px solid yellow">
              <img src={Open} alt="" className="menuIcon" onClick={() => setOpenMenu(true)}/>
            </Row>
            
          ) : (
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
          )}
        </div>
        <MenuMobile onClick={() => setOpenMenu(false)}/>
      </Col> : 
      <div className="row">
      <div>  <img src={Logomob} alt="" className="logo1" /></div>
      {mobile ? (
        <Row border="1px solid yellow">
          <img src={Open} alt="" className="menuIcon" onClick={() => setOpenMenu(true)}/>
        </Row>
      ) : (
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
      )}
    </div> }
    </div>
  );
};

export default NavBar;
