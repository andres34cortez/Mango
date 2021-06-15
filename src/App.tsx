import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import Contacto from "./screens/Contacto/contact";
import Servicios from "./screens/Services/services";
import Home from "./screens/Home/home";
import useMediaQuery from "./components/MediaQuery";

function App() {
  const mobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="App">
      {mobile ? <NavBar /> : <NavBar />}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/servicios" component={Servicios} />
        <Route exact path="/contacto" component={Contacto} />
      </Switch>
    </div>
  );
}

export default App;
