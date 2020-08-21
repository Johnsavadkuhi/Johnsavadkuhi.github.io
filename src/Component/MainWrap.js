import React from "react";
import Rightside from "./Rightside";
import Leftside from "./Leftside";
import "../Style/css/mainwrap.css";

function Mainwrap() {
  
  return (
      <div className="box">
         
          <Leftside />
          <Rightside />

        
      </div>
  ); 
  
}

export default Mainwrap;
