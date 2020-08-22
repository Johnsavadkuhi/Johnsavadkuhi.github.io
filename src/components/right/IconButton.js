import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCaretDown } from '@fortawesome/free-solid-svg-icons'

function Iconbutton({ children }) {
  return (
    <button className="tag">
      {children}   <FontAwesomeIcon icon={faCaretDown} />
    </button>
  );
}

export default Iconbutton;
