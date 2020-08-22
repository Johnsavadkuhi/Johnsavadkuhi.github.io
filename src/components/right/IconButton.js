import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {   faAngleDown } from '@fortawesome/free-solid-svg-icons'

function Iconbutton({ children }) {
  return (
    <button className="tag">
      {children}   <FontAwesomeIcon icon={faAngleDown} />
    </button>
  );
}

export default Iconbutton;
