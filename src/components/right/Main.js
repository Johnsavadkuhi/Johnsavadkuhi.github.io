import React from "react";
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
