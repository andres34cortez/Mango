import React from "react";
import Ring from "../../components/Design/Ring";
import Rectangulo from "../../components/Design/Rectangulo";
import Button from "../../components/Button/button";
import "./home.css";
import CircleG from "../../components/Design/CirculosG";
import { Container } from "@material-ui/core";
import Texto from "../../components/Design/Textos";
import Banner from "../../components/Design/Banner";

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
          width="10.9vw"
          height="10.9vw"
          border="3.47vw solid #F5F5F5"
          position="absolute"
          top="5.9vw"
          left="2.9vw"
        />
        <Ring
          width="4.8vw"
          height="4.8vw"
          border="2.08vw solid #F5F5F5"
          position="absolute"
          top="15.5vw"
          left="23.47vw"
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
          width="4.8vw"
          height="4.8vw"
          border="2.08vw solid #F5F5F5"
          position="absolute"
          top="15.5vw"
          left="23.47vw"
          opacity="0.13"
        />
        <Ring
          width="4.8vw"
          height="4.8vw"
          border="2.08vw solid #F5F5F5"
          position="absolute"
          top="15.5vw"
          left="23.47vw"
          opacity="0.2"
        />
        <Ring
          width="4.8vw"
          height="4.8vw"
          border="2.08vw solid #F5F5F5"
          position="absolute"
          top="15.5vw"
          left="23.47vw"
          opacity="0.1"
        />
        <Ring
          width="4.8vw"
          height="4.8vw"
          border="2.08vw solid #F5F5F5"
          position="absolute"
          top="15.5vw"
          left="23.47vw"
          opacity="0.1"
        />
        <Ring
          width="4.8vw"
          height="4.8vw"
          border="2.08vw solid #F5F5F5"
          position="absolute"
          top="15.5vw"
          left="23.47vw"
          opacity="0.3"
        />
      
        
          
               
        <Rectangulo />
     
        <Button   
        text="Agendar" 
        top="43vw" 
        left="38.25vw" />
     
        <Texto
        titulo="Ayudanos a que tu marca despegue y suba de nivel"
        subtitulo="Con estategias de Branding,Marketing y el poder del Diseño"
        top="21.6vw"
        left="13.9vw"
        />

        <Banner
        top="78vw"
        width="100vw"
        height="22.36vw"
        />
    
      </div>
    
  );
};

export default Home;
