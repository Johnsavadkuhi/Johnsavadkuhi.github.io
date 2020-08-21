import React from "react";
import Like from '../../img/icons8_heart_1.svg' ; 

function Header() {
  return (
    <div className="header">
      <div className="tags">
        <span className="tag">
          <span>Popular</span>

          <img src={Like} alt="like" />
        </span>
        <span className="tag">
          <span>Popular</span>
          <img src={Like} alt="like" />
        </span>
        <span className="tag">
          <span>Popular</span>
          <img src={Like} alt="like" />
        </span>
        <span className="tag">
          <span>Popular</span>
          <img src={Like} alt="like" />
        </span>
      </div>
    </div>
  );
}

export default Header;
