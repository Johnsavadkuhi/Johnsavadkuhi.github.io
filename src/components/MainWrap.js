import React from "react";
import "../style/css/mainwrap.css";
import Right from "./right/Right";
import Left from "./left/Left";
import LeftRigthContainer from "./LeftRightContainer";

function Mainwrap() {
  return (
    <LeftRigthContainer>
      <Left />
      <Right />
    </LeftRigthContainer>
  );
}

export default Mainwrap;
