import {Bar} from 'react-chartjs-2'
import React, { Component } from 'react';
import axios from 'axios';


export default  class LineChart extends Component {
  constructor() {
    super()
    this.state = 
      {
        allInfo:'',
        GG1:'',
        absences:'',
        examFailure:'',
        montherEdu:'',
        fatherEdu:'',
        gradeFirst:'',
        Barchartdata:''
      }
    }
    
  render()
  {
      return (<div> 
         <Bar
        data={{
          labels: ['at home', 'health', 'other', 'services', 'teacher'],
          datasets: [
            {
              label: 'GG1',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                'blue',
                'blue',
                'blue',
                'blue',
                'blue'
                // 'rgba(255, 99, 132, 0.2)',
                // 'rgba(54, 162, 235, 0.2)',
                // 'rgba(255, 206, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'blue'
                // 'rgba(255, 99, 132, 1)',
                // 'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
            {
              label: 'GG2',
              data: [47, 52, 67, 58, 9, 50],
              backgroundColor: 'orange',
              borderColor: 'red',
            },
          ],
        }}
        height={200}
        width={300}
        options={
          {
            title: {
              display: true,
              text: 'Percentage of Mother jobs Vs Results'
          },
        //   maintainAspectRatio: false,
          scales: {
            xAxes: [{
              stacked: true,
              gridLines: {
                display: false,
              }
            }],
            yAxes: [{
              stacked: true,
              ticks: {
                beginAtZero: true,
              },
              type: 'linear',
            }]
          
          },
          legend: {
            labels: {
              fontSize: 15,
            },
          },
        }}
      />
    </div>
    )
  }
}