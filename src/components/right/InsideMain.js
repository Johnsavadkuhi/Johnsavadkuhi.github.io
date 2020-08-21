import React, { useEffect, useState } from "react";
import {Line} from 'react-chartjs-2' ;
function Insidemain() {

const [chartData , setChartData] = useState({}); 

const chart = () =>{
  setChartData({
    labels:['2015' , '2016' , '2017' , '2018'], 
    datasets : [{
      data:[20,60,40,80] , 
      backgroundColor:["transparent"] ,
      borderWidth : 1 , 
      borderColor: "white"

    }]
  })
}
useEffect(()=>{

  chart()
  // var ctx = document.getElementById('myChart').getContext('2d');
	// var chart = new Chart(ctx, {
	// 	// The type of chart we want to create
	// 	type: 'line',

	// 	// The data for our dataset
	// 	data: {
	// 		labels: ['2015', '2016', '2017', '2018'],
	// 		datasets: [{
	// 			label: 'Number Of Portable Media Players',
	// 			borderColor: 'rgb(255,255,255)',
	// 			data: [20, 60, 35, 80, 20, 30, 45]
	// 		}]
	// 	},

	// 	// Configuration options go here
	// 	options: {
	// 		legend: {
	// 			labels: {
	// 				fontColor: "white",
	// 			}
	// 		}
	// 	}
	// });
} , [])

  return (
    <div className="inside-main">
      <div className="main-left">
        <p>
        The recomended daily calcium intake for a 20-year old is 1000 
        milligerams(mg).One cup of milk contains 299 mg of calcium and one cup 
        of juice contins 261 mg of calcium. which of the following inequalities 
        represents the possible number of cups of milk m and cups of juice ja 20 year old 
        could drink in a day to meet or exceed the recommended daily calcium intake from these drinks 
        alone ? 
        </p>
        
          {/* <canvas id="myChart" width="400" height="300"></canvas> */}
          <Line data={chartData} className="report-chart" 
          options={{ responsive:true  ,
          title:{text:'Number Of Portable Media Players' , display:true,fontColor: "white" } , 
          scales :{

            yAxes: [
              {
                ticks:{
                  autoSkip:true , maxTicksLimit:20 
                }, 
                gridLines :{display:false}
              }
              
            ],
              
              }}}/>
      

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
