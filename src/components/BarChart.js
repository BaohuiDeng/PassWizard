
import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import Hammer from "hammerjs";
import * as Zoom from "chartjs-plugin-zoom";

const BarChart = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    setChartData({
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [
            {
              label: '# of votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
            {
              label: 'Quantity',
              data: [47, 52, 67, 58, 9, 50],
              backgroundColor: 'orange',
              borderColor: 'red',
            },
          ],
        
       
      
    });
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <div className="App">
      <h1>Dankmemes</h1>
      <div>
        <Bar
          data={chartData}
          options={{
            responsive: true,
            title: { text: "THICCNESS SCALE", display: true },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true,
                  },
                  gridLines: {
                    display: false,
                  },
                },
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false,
                  },
                },
              ],
            },
            // pan: {
            //   enabled: true,
            //   mode: "xy",
            //   speed: 1,
            //   threshold: 1,
            // },
            // zoom: {
            //   enabled: true,
            //   drag: false,
            //   mode: "xy",
            //   limits: {
            //     max: 1,
            //     min: 0.5,
            //   },
            //   rangeMin: {
            //     x: 2,
            //     y: 1,
            //   },
            //   rangeMax: {
            //     x: 10,
            //     y: 150,
            //   },
            // },
            plugins: {
              zoom: {
                  // Container for pan options
                  pan: {
                      // Boolean to enable panning
                      enabled: true,
           
                      // Panning directions. Remove the appropriate direction to disable
                      // Eg. 'y' would only allow panning in the y direction
                      // A function that is called as the user is panning and returns the
                      // available directions can also be used:
                      //   mode: function({ chart }) {
                      //     return 'xy';
                      //   },
                      mode: 'xy',
           
                      rangeMin: {
                          // Format of min pan range depends on scale type
                          x: null,
                          y: null
                      },
                      rangeMax: {
                          // Format of max pan range depends on scale type
                          x: null,
                          y: null
                      },
           
                      // On category scale, factor of pan velocity
                      speed: 20,
           
                      // Minimal pan distance required before actually applying pan
                      threshold: 10,
           
                      // Function called while the user is panning
                      onPan: function({chart}) { console.log(`I'm panning!!!`); },
                      // Function called once panning is completed
                      onPanComplete: function({chart}) { console.log(`I was panned!!!`); }
                  },
           
                  // Container for zoom options
                  zoom: {
                      // Boolean to enable zooming
                      enabled: true,
           
                      // Enable drag-to-zoom behavior
                      drag: true,
           
                      // Drag-to-zoom effect can be customized
                      // drag: {
                      // 	 borderColor: 'rgba(225,225,225,0.3)'
                      // 	 borderWidth: 5,
                      // 	 backgroundColor: 'rgb(225,225,225)',
                      // 	 animationDuration: 0
                      // },
           
                      // Zooming directions. Remove the appropriate direction to disable
                      // Eg. 'y' would only allow zooming in the y direction
                      // A function that is called as the user is zooming and returns the
                      // available directions can also be used:
                      //   mode: function({ chart }) {
                      //     return 'xy';
                      //   },
                      mode: 'xy',
           
                      rangeMin: {
                          // Format of min zoom range depends on scale type
                          x: null,
                          y: null
                      },
                      rangeMax: {
                          // Format of max zoom range depends on scale type
                          x: null,
                          y: null
                      },
           
                      // Speed of zoom via mouse wheel
                      // (percentage of zoom on a wheel event)
                      speed: 0.1,
           
                      // Minimal zoom distance required before actually applying zoom
                      threshold: 2,
           
                      // On category scale, minimal zoom level before actually applying zoom
                      sensitivity: 3,
           
                      // Function called while the user is zooming
                      onZoom: function({chart}) { console.log(`I'm zooming!!!`); },
                      // Function called once zooming is completed
                      onZoomComplete: function({chart}) { console.log(`I was zoomed!!!`); }
                  }
              }
          }
          }}
        />
      </div>
    </div>
  );
};

export default BarChart;