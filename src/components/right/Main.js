import React from "react";
import Formula from '../../img/icons8_pi.svg' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {   faCalculator } from '@fortawesome/free-solid-svg-icons'

function Main({children}) {
  return (
    <div className="main">
      <div className="main-header">
        <div className="main-header-left">
          <FontAwesomeIcon style={{color:"white" , fontSize:"12px"}} icon={faCalculator}/>  <span style={{marginLeft:"5px"}}> Arithmetic</span> <span>  </span>   <span style={{color:"white"}}> • </span> <span>Real Problem</span>
        </div>
        <div className="main-header-right">
          <img src={Formula} alt="Formula" /> Formula
        </div>
      </div>{children}
    </div>
  );
}

export default Main;
