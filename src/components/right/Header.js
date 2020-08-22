import React from "react";
import Iconbutton from "./IconButton";

function Header() {
  return (
    <div className="header">
      <div className="tags">
        {/* <button className="tag"> 
          <span>Popular</span>

          <img src={Like} alt="like"/>
        </button>
        <button className="tag">
          <span>Arithmetic</span>
          <img src={Like} alt="like" />
        </button>
        <button className="tag">
          <span>Popular</span>
          <img src={Like} alt="like" />
        </button>
        <button className="tag">
          <span>More Filters</span>
          <img src={Like} alt="like" />
        </button > */}

        <Iconbutton>Popular</Iconbutton>
        <Iconbutton>Arithmetic</Iconbutton>
        <Iconbutton>Popular</Iconbutton>
        <Iconbutton>MoreFilters</Iconbutton>
        
      </div>
    </div>
  );
}

export default Header;
