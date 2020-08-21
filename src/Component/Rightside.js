import React from "react";
import Like from '../img/icons8_heart_1.svg' ; 
import Formula from '../img/icons8_pi.svg' ;

function Rightside() {
  return (
    <>
    	<div className="left">
		<div className="header">
			<div className="tags">
				<span className="tag">
					<span>Popular</span>
          
					<img src={Like} alt="like"/>
				</span>
				<span className="tag">
					<span>Popular</span>
					<img src={Like} alt="like"/>
				</span>
				<span className="tag">
					<span>Popular</span>
					<img src={Like}alt="like"/>
				</span>
				<span className="tag">
					<span>Popular</span>
					<img src={Like} alt="like"/>
				</span>
			</div>
		</div>
		<div className="main">
			<div className="main-header">
				<div className="main-header-left">
					<span>Arithmetic</span>
					<span>•</span>
					<span>Real Problem</span>
				</div>
				<div className="main-header-right">
					<img src={Formula} alt="Formula"/> Formula
				</div>
			</div>
			<div className="inside-main">
				<div className="main-left">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore
						et dolore magna aliqua. Praesent tristique magna sit amet. Dictum at tempor commodo ullamcorper
						a
						lacus vestibulum sed arcu. Quam adipiscing vitae proin sagittis nisl rhoncus. Augue interdum
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
							<input type="text" placeholder="1" value="1"/>
						</label>
						<label>
							<input type="text" placeholder="2" value="."/>
						</label>
						<label>
							<input type="text" placeholder="3"/>
						</label>
						<label>
							<input type="text" placeholder="4"/>
						</label>
					</div>
					<div className="buttons">
						<button>Skip</button>
						<button>Submit</button>
					</div>
				</div>
			</div>
		</div>
	</div>

    </>
  );
}
 
  export default Rightside ; 