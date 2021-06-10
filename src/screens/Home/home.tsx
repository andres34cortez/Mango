import React from "react";
import "./home.css";
import { Col, Row } from "jsxstyle";

import Ring from "../../components/Design/Ring";
import Rectangulo from "../../components/Design/Rectangulo";
import Button from "../../components/Button/button";
import CircleG from "../../components/Design/CirculosG";
import Texto from "../../components/Design/Textos";
import Banner from "../../components/Design/Banner";
import Circle from "../../components/Design/Circulos";
import Tarjeta1 from "../../components/Design/Tarjeta1";
import Tarjeta from "../../components/Design/Tarjeta";

import Agilidad from "../../assets/Agilidad.png";
import Transparencia from "../../assets/transparencia.png";
import Low from "../../assets/Low.png";

import Marketing from "../../assets/Marketing.png";
import Branding from "../../assets/Branding.png";
import Desarrollo from "../../assets/Desarrollo.png";

const Home = () => {
  return (
    <div className="home">
      <CircleG
        width="75.69vw"
        height="75.69vw"
        color="#1B007F"
        right="-10.22vw"
        top="-9.25vw"
      />
      <Ring
        width="8vw"
        height="8vw"
        border="2vw solid #F5F5F5"
        position="absolute"
        top="4vw"
        left="2vw"
      />
      <Ring
        width="3vw"
        height="3vw"
        border="1vw solid #F5F5F5"
        position="absolute"
        top="15vw"
        left="17vw"
        opacity="1"
      />
      <Ring
        width="23vw"
        height="23vw"
        border="8vw solid #F5F5F5"
        position="absolute"
        top="75vw"
        left="-1.25vw"
        opacity="0.1"
      />
      <Ring
        width="20vw"
        height="20vw"
        border="6vw solid #F5F5F5"
        position="absolute"
        top="103vw"
        left="62.5vw"
        opacity="0.1"
      />
      <Ring
        width="9.17vw"
        height="9.17vw"
        border="3vw solid #F5F5F5"
        position="absolute"
        top="165vw"
        left="85vw"
        opacity="0.13"
      />
      <Ring
        width="18vw"
        height="18vw"
        border="4vw solid #F5F5F5"
        position="absolute"
        top="175vw"
        left="60vw"
        opacity="0.2"
      />
      <Ring
        width="27vw"
        height="27vw"
        border="6vw solid #F5F5F5"
        position="absolute"
        top="195vw"
        left="23.47vw"
        opacity="0.1"
      />
      <Ring
        width="36vw"
        height="36vw"
        border="12vw solid #F5F5F5"
        position="absolute"
        top="220vw"
        left="-30vw"
        opacity="0.1"
      />
      <Ring
        width="35vw"
        height="35vw"
        border="12vw solid #F5F5F5"
        position="absolute"
        top="230vw"
        left="50vw"
        opacity="0.2"
      />
      <Rectangulo />
      <Button text="Agendar" top="43vw" left="38.25vw" />
      <Texto
        subtitulo="Con estategias de Branding,Marketing y el poder del Diseño"
        top="21.6vw"
        left="13.9vw"
      >
        Ayudanos a que tu marca despegue y suba de nivel
      </Texto>
      <Banner top="78vw" width="100vw" height="22.36vw" />
      <Col alignItems="center" paddingTop="101vw">
      <Row justifyContent="flex-end" style={{ marginLeft: "-13.5vw" }}>
        <Texto  >
          ¿Por qué <br />
          <span style={{color: "#00FF66" }}>MANGO VERDE</span>?
        </Texto>
        </Row>
        <Row paddingTop="11vw">
          <div style={{ marginRight: "2vw" }} />
          <Tarjeta1 imagen={Agilidad} title="Agilidad y Resultados">
            La agilidad y los buenos resultados nos han hecho que los clientes
            nos prefieran la parte de la creación de campañas disruptivas ahi va
            la clave de atraerles clientes y ventas altas eso es lo que les
            gusta
          </Tarjeta1>
          <div style={{ marginRight: "4vw" }} />
          <Tarjeta1 imagen={Transparencia} title="Transparencia">
            Somos trasparentes a las personas les encanta que nosotros les
            dejamos libre el presupuesto de su pauta pagada
          </Tarjeta1>
          <div style={{ marginRight: "4vw" }} />
          <Tarjeta1 imagen={Low} title="Low budget">
            Ofrecemos low budget en cosas de diseño que nos ha llegado a generar
            mas clientes porque por el tema de la pandemia quien te va a pagar
            $1000 mensuales y eso nos ha hecho tener muy buenos clientes...
          </Tarjeta1>
        </Row>
      </Col>


      <Col alignItems="center">
      <Row justifyContent="flex-end" style={{ marginLeft: "-13.5vw" }}>
        <Texto  >
          Servicios
        </Texto>
        </Row>
        <Row paddingTop="11vw">
          <div style={{ marginRight: "2vw" }} />
          <Tarjeta imagen={Marketing} title="Marketing">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.

          </Tarjeta>
          <div style={{ marginRight: "4vw" }} />
          <Tarjeta1 imagen={Branding} title="Branding">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </Tarjeta>
          <div style={{ marginRight: "4vw" }} />
          <Tarjeta imagen={Desarrollo} title="Desarrollo WEB">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </Tarjeta>
        </Row>
      </Col>
      <Circle
        width="105vw"
        height="100%"
        color="#5000FF"
        right="0"
        top="180vw"
      />
    </div>
  );
};

export default Home;
