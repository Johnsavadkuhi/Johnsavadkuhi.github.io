import React from "react";
import {Circleprogress , Report  , Bottom ,  Top } from ".";

function Left() {
  return (
    <>
      <div className="left">
        <Top>
          <Circleprogress />
          <Report text="COMPLETED" percentage="100" />
          <Report text="CORRECT" percentage="75" />
        </Top>
        <Bottom />
      </div>
    </>
  );
}

export default Left;
