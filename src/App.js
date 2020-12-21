import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./styles/app.scss";
import NavBar from "./components/NavBar";
import PicOfTheDay from "./components/PicOfTheDay";
import MarsPhotos from "./components/MarsPhotos"



function App() {
  return (
    <div className="App">
      
      <MarsPhotos /> 
      {/* <PicOfTheDay /> */}
    </div>
  );
}

export default App;
