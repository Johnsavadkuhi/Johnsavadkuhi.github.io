import React , {useEffect , useState }from "react";
import { Line } from "react-chartjs-2";
import MainFooter  from "./MainFooter";

function MainLeft() {

    const [chartData, setChartData] = useState({});

  const chart = (canvas) => {
    setChartData({
      labels: ["2015", "2016", "2017", "2018"],
      datasets: [
        {
          data: [20, 60 , 40,80],
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
    <div className="main-left">
      <p>
        The recomended daily calcium intake for a 20-year old is 1000
        milligerams(mg).One cup of milk contains 299 mg of calcium and one cup
        of juice contins 261 mg of calcium. which of the following inequalities
        represents the possible number of cups of milk m and cups of juice ja 20
        year old could drink in a day to meet or exceed the recommended daily
        calcium intake from these drinks alone ?
      </p>

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
                    lineHeight: 2,
                    source: "auto",
                    min: 0,
                    padding: 10,
                    autoSkips: false,
                    beginAtZero: true,
                    stepSize: 10,
                    fontColor: "white",
                  },
                  gridLines: {
                    color: "white",
                    lineWidth: 0.2,
                    drawTicks: false,
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
                    fontColor: "white",
                  },
                  gridLines: {
                    color: "white",
                    lineWidth: 0.2,
                    drawTicks: true,
                    tickMarkLength: 10,
                    drawOnChartArea: false,
                  },
                  offset: true,
                },
              ],
            },
          }}
        />
      </div>

      <MainFooter />
    </div>
  );
}

export default MainLeft ; 
