import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
function Insidemain() {
  const [chartData, setChartData] = useState({});

  const chart = (canvas) => {
    setChartData({
      labels: ["2015", "2016", "2017", "2018"],
      datasets: [
        {
          data: [20,60, 40, 80],
          backgroundColor: "transparent",
          borderWidth: 1,
          borderColor: "white",
          lineTension: 0,
          pointBackgroundColor:"white" 
        },
      ],
    });
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <div className="inside-main">
      <div className="main-left">
        <p>
          The recomended daily calcium intake for a 20-year old is 1000
          milligerams(mg).One cup of milk contains 299 mg of calcium and one cup
          of juice contins 261 mg of calcium. which of the following
          inequalities represents the possible number of cups of milk m and cups
          of juice ja 20 year old could drink in a day to meet or exceed the
          recommended daily calcium intake from these drinks alone ?
        </p>

        {/* <canvas id="myChart" width="400" height="300"></canvas> */}
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "#181818",
            marginTop: "10px",
            borderRadius: "1%",
          }}
        >
          <Line
            data={chartData}
            options={{
              responsive: true,
              legend: { display: false },
              title: {
                text: [
                  "Number Of Portable Media Players",
                  " ",
                  "Sold WOrldwide Each Year from 2006 to 2011",
                ],
                display: true,
                fontColor: "white",
                padding: 15,
              },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      
                       
                      padding: 10,
                      autoSkips: true   ,
                      beginAtZero: true, 
                      maxTicksLimit: 20 , 
                      autoSkipPadding: 20,
                      stepSize:20,
                    },
                    gridLines: {

                      color: "white",
                      lineWidth: 0.2,
                      drawTicks: false ,

                      
                    },
                    scaleLabel: {
                      labelString: "Number Sold (Millions)",
                      display: true,
                      padding: 20,
                    },
                  },
                ],
                xAxes: [
                  {
                    ticks: {
                      autoSkips: true,
                      beginAtZero: true,
                      padding: 5,
                    },
                    gridLines: {
                      color: "white",
                      lineWidth: 0.2,
                      drawTicks: true,
                      tickMarkLength: 10,
                      drawOnChartArea: false  ,
                      tickMarkLength:10 ,
                    },
                    offset: true,
                  },
                ],
              },
            }}
          />
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
