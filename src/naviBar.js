import React from "react";
import {Link} from 'react-router-dom';

function naviBar(){
    return(
        <ul>
            <li><Link to="/katowiceToKrakow">Home</Link></li>
        </ul>
    );
}

export default naviBar;