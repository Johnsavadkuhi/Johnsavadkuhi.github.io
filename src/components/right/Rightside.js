import React from "react";
import Header from "./Header";
import Insidemain from "./InsideMain";
import Main from "./Main";

function Rightside() {
  return (
    <>
      <div className="right">
        <Header />
        <Main>
          <Insidemain />
        </Main>
      </div>
    </>
  );
}

export default Rightside;
