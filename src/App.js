import React, { Component } from "react";
import "./App.css";
import FetchRandomUser from "./components/FetchRandomUser";
import FetchRandomUser1 from "./components/FetchRandomUser1";
import FetchRandomUserNAVI from "./components/FetchRandomUserNAVI";
import {Route, Link} from 'react-router-dom';
import naviBar from "./naviBar";

class App extends Component {
  state = {
    visible: true
  };

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={FetchRandomUserNAVI} />
        <Route exact path="/krakowToKatowice" component={FetchRandomUser} />
        <Route exact path="/katowiceToKrakow" component={FetchRandomUser1} />
      </div>
    );
  }
}

export default App;