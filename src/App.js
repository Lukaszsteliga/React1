import React, { Component } from "react";
import "./App.css";
import FetchRandomUser from "./components/FetchRandomUser";
import FetchRandomUser1 from "./components/FetchRandomUser1";
import {Route, Link} from 'react-router-dom';
import naviBar from "./naviBar";

class App extends Component {
  state = {
    visible: true
  };

  render() {
    return (
      <div className="App">
        <naviBar />
        <Route exact path="/" component={FetchRandomUser} />
        <Route exact path="/katowiceToKrakow" component={FetchRandomUser1} />
      </div>
    );
  }
}

export default App;
