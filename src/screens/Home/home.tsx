import React from "react";
import Ring from "../../components/Design/Ring";
import Rectangulo from "../../components/Design/Rectangulo";
import Button from "../../components/Button/button";
import "./home.css";
import CircleG from "../../components/Design/CirculosG";
import { Container } from "@material-ui/core";

const Home = () => {
  return (
   
      <div className="home">
        
        <CircleG
          width="75.69vw"
          height="75.69vw"
          color="#1B007F"
          right="-7.22vw"
          top="-9.25vw"
        />
        <Ring
          width="11vw"
          height="11vw"
          border="3vw solid #F5F5F5"
          position="absolute"
          top="60px"
          left="15px"
        />
        <Ring
          width="69px"
          height="69px"
          border="20px solid #F5F5F5"
          position="absolute"
          top="200px"
          left="250px"
        />
      
        
          
               
        <Rectangulo />
     
        <Button   
        text="Agendar" 
        top="200px" 
        left="200px" />
     
  
    
      </div>
    
  );
};

export default Home;
