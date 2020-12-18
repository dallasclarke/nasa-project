import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./styles/app.scss";
import Header from "./components/Header";
import Home from "./components/Home";
import MarsPhotos from "./components/MarsPhotos"

function App() {
  return (
    <div className="App">
      <Header />
      <MarsPhotos /> 
    </div>
  );
}

export default App;
