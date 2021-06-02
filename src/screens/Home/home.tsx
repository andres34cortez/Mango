import React from "react";
import Ring from "../../components/Design/Ring";
import Rectangulo from "../../components/Design/Rectangulo";
import Button from "../../components/Button/button";
import "./home.css";
import CircleG from "../../components/Design/CirculosG";
import { Container } from "@material-ui/core";

const Home = () => {
  return (
    <Container>
      <div className="home">
        <CircleG
          width="1090px"
          height="1090px"
          color="#1B007F"
          right="-104px"
          top="-133px"
        />
        <Ring
          width="157px"
          height="157px"
          border="50px solid #F5F5F5"
          position="absolute"
          top="85px"
          left="29px"
        />
        <Ring
          width="69px"
          height="69px"
          border="20px solid #F5F5F5"
          position="relative"
          top="250px"
        />
        <Rectangulo />
        <Button text="Agendar" />
      </div>
    </Container>
  );
};

export default Home;
