import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./styles/app.scss";
import Header from "./components/Header";
import PicOfTheDay from "./components/PicOfTheDay";
import MarsPhotos from "./components/MarsPhotos"


function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <PicOfTheDay /> 
    </div>
  );
}

export default App;
