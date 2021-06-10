import React, { useState } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import "./App.css";

import Footer from "./components/Design/Footer";
import NavBar from "./components/NavBar/NavBar";
import Contacto from "./screens/Contacto/contact";
import Servicios from "./screens/Services/services";
import Home from "./screens/Home/home";

function App() {
  const [route, setRoute] = useState(`/`);
  const match = useRouteMatch();

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/servicios" component={Servicios} />
        <Route exact path="/contacto" component={Contacto} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
