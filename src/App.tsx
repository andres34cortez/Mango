import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Footer from "./components/Design/Footer";
import NavBar from "./components/NavBar/NavBar";
import Home from "./screens/Home/home";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
