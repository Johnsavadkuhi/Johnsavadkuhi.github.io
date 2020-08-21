import React from "react";
import Formula from '../../img/icons8_pi.svg' ;

function Main({children}) {
  return (
    <div className="main">
      <div className="main-header">
        <div className="main-header-left">
          <span>Arithmetic</span>
          <span>•</span>
          <span>Real Problem</span>
        </div>
        <div className="main-header-right">
          <img src={Formula} alt="Formula" /> Formula
        </div>
      </div>{children}
    </div>
  );
}

export default Main;
