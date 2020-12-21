import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./styles/app.scss";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import PicOfTheDay from "./components/PicOfTheDay";
import MarsPhotos from "./components/MarsPhotos"
import SearchBar from "./components/SearchBar";




function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        {/* <MarsPhotos />  */}
        {/* <PicOfTheDay /> */}
        <Route exact path="/" component={SearchBar} />
        <Route exact path="/picoftheday" component={PicOfTheDay} />
        <Route exact path="/marsphotos" component={MarsPhotos} />
      </Switch>
    </div>
  );
}

export default App;
