import React from "react";

function Circleprogress() {
  return (
    <div className="pie-wrapper progress-full">
      <span className="text">ACCURACY</span>
      <span className="label">
        75<em>%</em>
      </span>
      <div className="pie">
        <div className="left-side half-circle"></div>
        <div className="right-side half-circle"></div>
      </div>
    </div>
  );
}

export default Circleprogress;
