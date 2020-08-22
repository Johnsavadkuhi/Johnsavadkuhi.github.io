import React from "react";
import Iconbutton from "./IconButton";

function Header() {
  return (
    <div className="header">
      <div className="tags">
        
        <Iconbutton>Popular</Iconbutton>
        <Iconbutton>Arithmetic</Iconbutton>
        <Iconbutton>Popular</Iconbutton>
        <Iconbutton>MoreFilters</Iconbutton>
        
      </div>
    </div>
  );
}

export default Header;
