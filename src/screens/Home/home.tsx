import React from "react";
import Circle from "../../components/Design/Circulos";
import Ring from "../../components/Design/Ring";
import Rectangulo from "../../components/Design/Rectangulo";
import Button from "../../components/Button/button";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      {/* circulo grande */}
      {/* <div style={{ position: "relative", top: -133, right: -90, zIndex: 0 }}>
        <Circle width="1089px" height="1089px" border="550px solid #1B007F" />
      </div> */}
      {/* circulos pequenos */}
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
