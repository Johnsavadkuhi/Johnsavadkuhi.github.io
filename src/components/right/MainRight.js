import React from "react";

function Mainright() {
  return (
    <div className="main-left">
      <div></div>
      <div className="inputs">
        <label>
          <input type="text" placeholder="1" defaultValue="1" />
        </label>
        <label>
          <input type="text" placeholder="2" defaultValue="." />
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
  );
}

export default Mainright;
