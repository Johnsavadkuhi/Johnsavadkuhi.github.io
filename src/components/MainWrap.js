import React from "react";
import Rightside from "./right/Rightside";
import Leftside from "./left/Leftside";
import "../style/css/mainwrap.css";

function Mainwrap() {
  
  return (
      <div className="box">
          <Leftside />
          <Rightside />
      </div>
  ); 
  
}

export default Mainwrap;
