import React from "react";
import {Link} from 'react-router-dom';

export default class FetchRandomUserNAVI extends React.Component {
  render() {
    
   return (
    <div>
      <h1>Witamy na KKBusy</h1>
      <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/krakowToKatowice">krakowToKatowice</Link></li>
            <li><Link to="/katowiceToKrakow">katowiceToKrakow</Link></li>
        </ul>
    </div>
  );
  }
}