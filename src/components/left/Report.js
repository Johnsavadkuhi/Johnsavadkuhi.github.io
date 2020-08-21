import React from "react";

function Report({ text, percentage }) {
  return (
    <>
     
      <div className="report">
        <div className="report-title">{text}</div>
        <p>
          <span>{percentage}</span> PROBLEMS
        </p>
      </div>
    </>
  );
}

export default Report;
