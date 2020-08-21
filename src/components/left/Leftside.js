import React from "react";
import Circleprogress from "./CircleProgress";
import Report from "./Report";
import Bottom from "./Bottom";
import Top from "./Top"; 

function Leftside() {
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

export default Leftside;
