import React from "react";
import { Header, InsideMain, Main } from ".";

function Right() {
  return (
    <>
      <div className="right">
        <Header />
        <Main>
          <InsideMain />
        </Main>
      </div>
    </>
  );
}

export default Right;
