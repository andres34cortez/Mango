import React from "react";
import { Col, Row, Box } from "jsxstyle";
//components
import Footer from "../../components/Design/Footer";
import Texto from "../../components/Design/Textos";
import Tarjeta from "../../components/Design/Tarjeta";
import Ring from "../../components/Design/Ring";
import Circle from "../../components/Design/Circulos";
//imagenes
import Marketing from "../../assets/Marketing.png";
import Branding from "../../assets/Branding.png";
import Desarrollo from "../../assets/Desarrollo.png";
import MarketingMB from "../../assets/MarketingMB.png";
import BrandingMB from "../../assets/BrandingMB.png";
import DesarrolloMB from "../../assets/DesarrolloMB.png";
import Desarrollo2 from "../../assets/Desarrollo2.png";
import Social from "../../assets/Social.png";
import Rebranding from "../../assets/Rebranding.png";
//mediaQ
import useMediaQuery from "../../components/MediaQuery";

const Circulos = () => {
  return (
    <Col
      position="absolute"
      top={0}
      left={0}
      right={0}
      bottom={0}
      zIndex={0}
    >
      <Box position="relative" flex="1" zIndex={-1000000}>
        <Ring
          width="40vw"
          height="40vw"
          border="8vw solid #F5F5F5"
          opacity="0.1"
          position="absolute"
          top="30vw"
          left="40vw"
        ></Ring>
        <Ring
          width="20vw"
          height="20vw"
          border="5vw solid #F5F5F5"
          position="absolute"
          top="1vw"
          left="80vw"
          opacity="0.1"
        />
         <Circle
          width="90vw"
          height="90vw"
          color="#5000FF"
          right="-10vw"
          top="1vw"
        />
      </Box>
    </Col>
  );
};

const Servicios = () => {
  const ipad=useMediaQuery('(max-width:1000px)');
  const mobile=useMediaQuery('(max-width:768px)');
  return (
    <Col>
      <Circulos />
      {mobile? ( <Col paddingTop='23vw' zIndex={120} alignItems="center">
            <div style={{
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: 500,
              fontSize: '12vw',
              textAlign: 'center',
              color: '#f5f5f5',
            }}>
            Servicios</div>
            <div style={{ marginTop: "7vw" }} />
            <Row flexWrap="wrap" justifyContent='center'>
            <div style={{padding: 5}}>
            <Tarjeta imagen={MarketingMB} title="Marketing"/>
            </div>
            <div style={{padding: 5}}>
            <Tarjeta imagen={BrandingMB} title="Branding"/></div>
            <div style={{padding: 5}}>
            <Tarjeta imagen={DesarrolloMB} title="Desarrollo WEB"/></div>
            <div style={{padding: 5}}>
            <Tarjeta imagen={MarketingMB} title="Social"/></div>
            <div style={{padding: 5}}>
            <Tarjeta imagen={BrandingMB} title="Rebranding"/></div>
            <div style={{padding: 5}}>
            <Tarjeta imagen={DesarrolloMB} title="Desarrollo APPs"/></div></Row>
          </Col>):
      <Col alignItems="center" zIndex={0}>
          <Row justifyContent="flex-end" style={{ marginLeft: "-13.5vw", paddingTop:"10vw" }}>
            <Texto >Servicios</Texto>
          </Row>
          <Row paddingTop="10vw">
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
          <Row paddingTop="3vw">
            <div style={{ marginRight: "2vw" }} />
            <Tarjeta imagen={Social} title="Social" >
            Creamos y mantenemos la presencia de tu marca en redes sociales. Encuentra tu cliente potencial y llega a el gracias a tu estrategia de social media.
            </Tarjeta>
            <div style={{ marginRight: "4vw" }} />
            <Tarjeta imagen={Rebranding} title="Rebranding">
            La imagen de tu marca habla más que mil palabras. Diseñamos tu logotipo, línea gráfica y más. Te ayudamos a darle identidad y adn a tu marca.
            </Tarjeta>
            <div style={{ marginRight: "4vw" }} />
            <Tarjeta imagen={Desarrollo2} title="Desarrollo APPs">
            Le damos vida a tus ideas, desarrollamos tu app desde la experiencia de usuario hasta la optimizacion back end. Somos expertos en lo que hacemos, confía tus apps en nuestras manos.
            </Tarjeta>
          </Row>
        </Col>}
      <Col padding="7vw">
        <Footer />
      </Col>  
    </Col>
  )
};

export default Servicios;
