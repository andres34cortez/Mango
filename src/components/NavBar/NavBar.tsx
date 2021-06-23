import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { Row, Col } from "jsxstyle";
import useMediaQuery from "../MediaQuery";
import Open from "../../assets/open.png"
import Logo from "../../assets/Logo.png";
import Logomob from "../../assets/Logomob.png"

import {Animated} from "react-animated-css"

const MenuMobile = (props: {onClick: () => void}) => {
  const [active, setActive] = useState("/");
return (
    <Col>
      <Link
        to="/"
        className="mobileLink"
        style={{ color: active === "/" ? "#00ff66" : "#f5f5f5" }}
        onClick={() =>{ setActive("/"); props.onClick()}}
      >
              <p>Inicio</p>
            </Link>
            <Link
              to="/servicios"
              className="mobileLink"
              style={{ color: active === "/servicios" ? "#00ff66" : "#f5f5f5" }}
            onClick={() => {setActive("/servicios");props.onClick()}}
            >
              <p>Servicios</p>
            </Link>
            {/* <Link
            to="/proyectos"
            className="mobileLink"
            style={{ color: active === "/proyectos" ? "#00ff66" : "#f5f5f5" }}
            onClick={() => setActive("/proyectos")}
          >
            <p>Proyectos</p>
          </Link> */}
            <Link
              to="/contacto"
              className="mobileLink"
              style={{ color: active === "/contacto" ? "#00ff66" : "#f5f5f5" }}
              onClick={() => {setActive("/contacto"); props.onClick()}}
            >
              <p>Contacto</p>
    </Link>
    <div onClick={props.onClick}></div>
  </Col>
  )
}

const NavBar = () => {
  const [active, setActive] = useState("/");
  const [openMenu, setOpenMenu] = useState(false)
  const mobile = useMediaQuery("(max-width: 1000px)");

  return (
    <div className="navContainer">
      {openMenu ? 
      <Col className="menuContainer" flex={1}>
        <div className="row">
          <img src={Logo} alt="" className="logo" />
          {mobile ? (
            <Row >
              <img src={Open} alt="" className="menuIcon" onClick={() => setOpenMenu(o => !o)}/>
            </Row>
            ) : (
            <Row>
              <Link
                to="/"
                className="navLink"
                style={{ color: active === "/" ? "#00ff66" : "#f5f5f5" }}
                onClick={() => setActive("/")}
              >
                <p>Inicio</p>
              </Link>
              <Link
                to="/servicios"
                className="navLink"
                style={{ color: active === "/servicios" ? "#00ff66" : "#f5f5f5" }}
                onClick={() => setActive("/servicios")}
              >
                <p>Servicios</p>
              </Link>
              {/* <Link
              to="/proyectos"
              className="navLink"
              style={{ color: active === "/proyectos" ? "#00ff66" : "#f5f5f5" }}
              onClick={() => setActive("/proyectos")}
            >
              <p>Proyectos</p>
            </Link> */}
              <Link 
                to="/contacto"
                className="navLink"
                style={{ color: active === "/contacto" ? "#00ff66" : "#f5f5f5" }}
                onClick={() => setActive("/contacto")}
              >
                <p>Contacto</p>
              </Link>
            </Row>
          )}
        </div>
        <Animated animationIn="fadeInDown" animationOut="fadeOutUp" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
        <MenuMobile onClick={() => setOpenMenu(false)}/>
        </Animated>
      </Col>
      : 
      <div className="row">
      <div>  
        <img src={Logomob} alt="" className="logo1" />
      </div>
      {mobile ? (
        <Row >
          <img src={Open} alt="" className="menuIcon" onClick={() => setOpenMenu(true)}/>
        </Row>
      ) : (
        <Row>
          <Link
            to="/"
            className="navLink"
            style={{ color: active === "/" ? "#00ff66" : "#f5f5f5" }}
            onClick={() => setActive("/")}
          >
            <p>Inicio</p>
          </Link>
          <Link
            to="/servicios"
            className="navLink"
            style={{ color: active === "/servicios" ? "#00ff66" : "#f5f5f5" }}
            onClick={() => setActive("/servicios")}
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
            onClick={() => setActive("/contacto")}
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
