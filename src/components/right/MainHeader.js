import React from "react";

function MainHeader() {
  return (
    <>
      <div className="main-header">
        <div className="main-header-left">
          <FontAwesomeIcon
            style={{ color: "white", fontSize: "12px" }}
            icon={faCalculator}
          />
          <span style={{ marginLeft: "5px" }}> Arithmetic</span> <span> </span>{" "}
          <span style={{ color: "white" }}> • </span> <span>Real Problem</span>
        </div>
        <div className="main-header-right">
          <img src={Formula} alt="Formula" /> Formula
        </div>
      </div>
    </>
  );
}

export default MainHeader ; 