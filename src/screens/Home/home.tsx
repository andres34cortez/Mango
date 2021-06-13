import React, { useState, useEffect } from "react";
import { Col, Row, Box } from "jsxstyle";
import "./home.css";
import Ring from "../../components/Design/Ring";
import Rectangulo from "../../components/Design/Rectangulo";
import Button from "../../components/Button/button";
import CircleG from "../../components/Design/CirculosG";
import Texto from "../../components/Design/Textos";
import Banner from "../../components/Design/Banner";
import Circle from "../../components/Design/Circulos";
import Tarjeta1 from "../../components/Design/Tarjeta1";
import Tarjeta from "../../components/Design/Tarjeta";
import ModalHome from "../../components/Design/ModalHome";

import Agilidad from "../../assets/Agilidad.png";
import Transparencia from "../../assets/transparencia.png";
import Low from "../../assets/Low.png";
import Footer from "../../components/Design/Footer";
import Marketing from "../../assets/Marketing.png";
import Branding from "../../assets/Branding.png";
import Desarrollo from "../../assets/Desarrollo.png";
import Notas from "../../assets/Telefono.png";

import a from "../../assets/1.png";
import b from "../../assets/2b.png";
import c from "../../assets/3b.png";
import d from "../../assets/4b.png";

import f from "../../assets/6.png";

import { Dialog } from "@material-ui/core";
// import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

// const dialog = createMuiTheme({
//   overrides: {
//     MuiDialog: {
//       container: {
//         backgroundColor: "yellow",
//       },
//       scrollPaper: {
//         backgroundColor: "red",
//       },
//     },
//   },
// });

const Circulos = () => {
  return (
    <Col
      position="absolute"
      top={0}
      left={0}
      right={0}
      bottom={0}
      overflow="hidden"
      zIndex={0}
    >
      <Box position="relative" flex="1" zIndex={-1000000}>
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
        <Circle
          width="100vw"
          height="180vw"
          color="#5000FF"
          right="0"
          top="180vw"
        />
      </Box>
    </Col>
  );
};

const Home = () => {
  //este estado es como que no anda pero no se porq
  const [openModal, setOpenModal] = useState(false);

  return (
    <Col position="relative" display="block" marginTop="-3.5vw">
      <Circulos />
      <Col zIndex={1}>
        <Rectangulo />
        <Texto
          subtitulo="Con estategias de Branding,Marketing y el poder del Diseño"
          top="19.5vw"
          left="13.9vw"
        >
          Ayudanos a que tu marca despegue y suba de nivel
        </Texto>
        <Button
          text="Agendar"
          top="40vw"
          left="40vw"
          comentario="Agenda un meet para que podamos asesorarte"
          onClick={() => setOpenModal((o) => !o)}
        />
        {/* /////////////////////MODAL///////////////////// */}
        <Dialog open={openModal} onClose={() => setOpenModal(false)}>
          {/* <ThemeProvider theme={dialog}> */}
          <ModalHome />
          {/* </ThemeProvider> */}
        </Dialog>
        {/* /////////////////////////////////////////////// */}
        <Banner top="78vw" width="100vw" height="22.36vw" />
        <Col paddingTop="101vw" alignItems="center">
          <Row justifyContent="flex-end" style={{ marginLeft: "-13.5vw" }}>
            <Texto>
              ¿Por qué <br />
              <span style={{ color: "#00FF66" }}>MANGO VERDE</span>?
            </Texto>
          </Row>
          <Row paddingTop="11vw" justifyContent="center">
            <div style={{ marginRight: "2vw" }} />
            <Tarjeta1 imagen={Agilidad} title="Agilidad y Resultados">
            Sabemos que estás buscando atraer más clientes y conseguir subir tus ventas, la agilidad de nuestros servicios y la creación de campañas disruptivas han brindado buenos resultados a nuestros clientes. 
            </Tarjeta1>
            <div style={{ marginRight: "4vw" }} />
            <Tarjeta1 imagen={Transparencia} title="Transparencia">
            La transparencia con nuestros clientes es uno de nuestros más grandes diferenciadores. Sabemos que tu también debes tener el control de tus pagos en social media y resultados 100% reales.

            </Tarjeta1>
            <div style={{ marginRight: "4vw" }} />
            <Tarjeta1 imagen={Low} title="Low budget">
            Entendemos tus necesidades, vamos contigo de la mano, apoyandote y ayudandote a tener una marca de nivel y generar más clientes. Adaptandonos a tu presupuesto.
            </Tarjeta1>
          </Row>
        </Col>
        <Col alignItems="center">
          <Row justifyContent="flex-end" style={{ marginLeft: "-13.5vw" }}>
            <Texto>Servicios</Texto>
          </Row>
          <Row paddingTop="11vw">
            <div style={{ marginRight: "2vw" }} />
            <Tarjeta imagen={Marketing} title="Marketing">
            Consigue más clientes y genera contenido de valor en las diferentes plataformas con nuestro servicio de Marketing Digital.
            </Tarjeta>
            <div style={{ marginRight: "4vw" }} />
            <Tarjeta imagen={Branding} title="Branding">
            ¿Buscando renovar o iniciar tu marca? Contrata nuestro servicio de branding o creación de marcas. Hacemos mucho más que un logotipo.

            </Tarjeta>
            <div style={{ marginRight: "4vw" }} />
            <Tarjeta imagen={Desarrollo} title="Desarrollo WEB">
            Sabemos que debes tener presencia en la web, diseñamos y desarrollamos tu web, sin utilizar plantillas. 

            </Tarjeta>
          </Row>
        </Col>
        <Row
          justifyContent="center"
          paddingTop="1vw"
          alignItems="center"
          zIndex={1}
        >
          <img src={Notas} alt="" style={{ height: "25vw" }} />
          <Col marginLeft="11.7vw" marginTop="-3vw">
            <div>
              <h1 style={{ margin: 0, paddingBottom: "1vw" }}>
                Agenda tu <br /> Consulta
              </h1>
              <h2 style={{ margin: 0 }}>
                Queremos ayudarte, agenda un meet <br /> y juntos lograremos
                alcanzar tus <br /> objetivos
              </h2>
            </div>
            <Row style={{ paddingTop: "1.4vw" }} justifyContent="flex-end">
              <Button text="Agendar" onClick={() => setOpenModal((o) => !o)} />
            </Row>
          </Col>
        </Row>
        <Col alignItems="center" marginBottom="2vw">
          <Row justifyContent="flex-end" style={{ marginLeft: "-13.5vw" }}>
            <Texto>Clientes</Texto>
          </Row>
          <Row paddingTop="7vw" zIndex={1}>
            <div style={{ marginRight: "1vw" }} />
            <div style={{ maxHeight: "10,9vw" }}>
              <div style={{ padding: "1vw" }}>
                <img src={a} style={{ padding: "1vw",maxHeight: "10,9vw" }} />
                <img src={b} style={{ padding: "1vw", height: "10,9vw" }} />
                <img src={c} style={{ padding: "1vw", height: "10,9vw" }} />
                <img src={d} style={{ padding: "1vw", height: "10,9vw" }} />
               
                <img src={f} style={{ padding: "1vw", height: "10,9vw" }} />
              </div>
            </div>
          </Row>
        </Col>
        <Footer />
        <Col paddingTop="4vw" />
      </Col>
    </Col>
  );
};

export default Home;
