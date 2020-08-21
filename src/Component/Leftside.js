import React from "react";

function Leftside() {
  
  return (
    <>
<div className="right">
		<div className="top">
			<div>
				<div className="pie-wrapper progress-full">
					<span className="text">ACCURACY</span>
					<span className="label">75<em>%</em></span>
					<div className="pie">
						<div className="left-side half-circle"></div>
						<div className="right-side half-circle"></div>
					</div>
				</div>
			</div>
			<div className="report">
				<div className="report-title">COMPLETED</div>
				<p>
					<span>100</span> PROBLEMS
				</p>
			</div>
			<div className="report">
				<div className="report-title">CORRECT</div>
				<p>
					<span>75</span> PROBLEMS
				</p>
			</div>
		</div>
		<div className="bottom">
			<p>PAST 24 HOURS , 2020 2/20</p>
		</div>
	</div>
	
    </>
  );
}

export default Leftside;
