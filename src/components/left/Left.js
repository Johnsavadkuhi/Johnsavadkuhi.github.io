import React from "react";
import loadable from '@loadable/component'

//import {Circleprogress , Report  , Bottom ,  Top } from ".";
const  Circleprogress = loadable(()=>import('./CircleProgress'));
const  Report  = loadable(()=>import('./Report'));  
const  Bottom  = loadable(()=>import('./Bottom'));  
const  Top  = loadable(()=>import('./Top')); 
 
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
