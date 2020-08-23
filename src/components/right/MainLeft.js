import React from "react";
import loadable from '@loadable/component'

// import MainFooter  from "./MainFooter";
// import LinearChart from "./LinearChart";
const MainFooter = loadable(()=>import('./MainFooter')); 
const LinearChart = loadable(()=>import('./LinearChart')); 

function MainLeft() {

 
  return (
    <div className="main-left">
      <p>
        The recomended daily calcium intake for a 20-year old is 1000
        milligerams(mg).One cup of milk contains 299 mg of calcium and one cup
        of juice contins 261 mg of calcium. which of the following inequalities
        represents the possible number of cups of milk m and cups of juice ja 20
        year old could drink in a day to meet or exceed the recommended daily
        calcium intake from these drinks alone ?
      </p>
      
      <LinearChart/>
      <MainFooter />
    </div>
  );
}

export default MainLeft ; 
