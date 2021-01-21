import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';
import axios from 'axios';





export default  class BarChartSecond extends Component {

  constructor() {
    super()
    this.state = 
      {
        allInfo:'',
        GG1:'',
        BarchartData:''

      }
    }

    componentDidMount() {

      axios.get(`http://20.82.112.97:5000/alldata`)
      .then(res => {
        const data = res.data;
        this.setState({allInfo:data})
        
        // console.log(this.state.allInfo["0"].school)

        // Create a new array based on current state:
        let FirstGradeFemale = [];
        let FirstGradeMale = [];
        let BarchartData = [];




        for (var i = 0; i < this.state.allInfo.length; i++) {
              // console.log(this.state.allInfo[i].GG1)
              // retrieving sex
              if (this.state.allInfo[i].sex == "F") {
                FirstGradeFemale.push(this.state.allInfo[i].GG1 );
                
              }
              if (this.state.allInfo[i].sex == "M") {
                FirstGradeMale.push(this.state.allInfo[i].GG1 );
                
              }    
  
            }
            // make average
                const average = arr => arr.reduce( ( p, c ) => p + c, 0 ) / arr.length;
                FirstGradeFemale = average( FirstGradeFemale );
                FirstGradeMale = average( FirstGradeMale );
                BarchartData.push(FirstGradeFemale,FirstGradeMale );

            // Set state
          this.setState({ BarchartData:BarchartData});

          console.log(this.state.BarchartData)


      }).catch(()=>{
        alert('Error retrieving data!!');
    })
    }



    render() 
    {
      return (

       
        <div> 

         <Bar
        data={{
          labels: ['Male', 'Female'],
          datasets: [
            {
              label: 'Gender Vs AverageGrade',
              data: this.state.BarchartData,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                // 'rgba(255, 206, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
            // {
            //   label: 'Quantity',
            //   data: [47, 52, 67, 58, 9, 50],
            //   backgroundColor: 'orange',
            //   borderColor: 'red',
            // },
          ],
        }}
        height={200}
        width={300}
        options={{
        //   maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
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

