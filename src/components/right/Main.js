import React from "react";
import Formula from "../../img/icons8_pi.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";
import MainHeader from "./MainHeader";

function Main({ children }) {
  return (
    <div className="main">
    
     <MainHeader/>
      {children}
    </div>
  );
}

export default Main;
