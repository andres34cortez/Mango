import React from "react";
import Ring from "../../components/Design/Ring";
import Rectangulo from "../../components/Design/Rectangulo";
import Button from "../../components/Button/button";
import "./home.css";
import CircleG from "../../components/Design/CirculosG";
const Home = () => {
  return (
    <div className="home">
      <div>
        <CircleG
          width="1090px"
          height="1090px"
          color="#1B007F"
          rigth="-104px"
          top="-133px"
        />
      </div>
      <div style={{ marginLeft: 60, marginTop: 15, zIndex: 1 }}>
        <Ring width="157px" height="157px" border="50px solid #F5F5F5" />
      </div>
      <div style={{ marginLeft: 300, marginTop: 0, zIndex: 1 }}>
        <Ring width="69px" height="69px" border="20px solid #F5F5F5" />
      </div>
      <div style={{ marginLeft: 90, marginTop: 20, zIndex: 1 }}>
        <Rectangulo />
      </div>
      <div style={{ marginLeft: 500, marginTop: 0, zIndex: 1 }}>
        <Button text="Agendar" />
      </div>
    </div>
  );
};

export default Home;
