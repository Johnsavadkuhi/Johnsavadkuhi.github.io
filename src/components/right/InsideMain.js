import React from "react";

function Insidemain() {
  return (
    <div className="inside-main">
      <div className="main-left">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent
          tristique magna sit amet. Dictum at tempor commodo ullamcorper a lacus
          vestibulum sed arcu. Quam adipiscing vitae proin sagittis nisl
          rhoncus. Augue interdum
        </p>
        <div className="report-chart">
          <canvas id="myChart" width="400" height="300"></canvas>
        </div>
        <div className="footer-main">
          <span>Tag 1 </span>
          <span>Tag 2 </span>
          <span>Tag 3 </span>
        </div>
      </div>
      <div className="main-left">
        <div></div>
        <div className="inputs">
          <label>
            <input type="text" placeholder="1" value="1" />
          </label>
          <label>
            <input type="text" placeholder="2" value="." />
          </label>
          <label>
            <input type="text" placeholder="3" />
          </label>
          <label>
            <input type="text" placeholder="4" />
          </label>
        </div>
        <div className="buttons">
          <button>Skip</button>
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Insidemain;
