import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';
import axios from 'axios';





export default  class BarChart extends Component {

  constructor() {
    super()
    this.state = 
      {
        allInfo:'',
        Sex:'',
        GG1:'',
        traveltime:'',
        studytime:'',
        freetime:'',
        absences:'',
        Barchartdata:''
      }
    }

    componentDidMount() {

      axios.get(`http://20.82.112.97:5000/alldata`)
      .then(res => {
        const data = res.data;
        this.setState({allInfo:data})
        
         console.log(this.state.allInfo["0"].school)

        // Create a new array based on current state:
        let sex = [];
        let FirstGrade = [];
        let travelt = [];
        let studyt = [];
        let freet = [];
        let absencesAmount = [];

        for (var i = 0; i < this.state.allInfo.length; i++) {
              // console.log(this.state.allInfo[i].GG1)
              // retrieving sex
              sex.push(this.state.allInfo[i].sex );
              // retriving first Grade
              FirstGrade.push(this.state.allInfo[i].GG1 );             
              travelt.push(this.state.allInfo[i].traveltime );
              studyt.push(this.state.allInfo[i].studytime );
              freet.push(this.state.allInfo[i].freetime );
              absencesAmount.push(this.state.allInfo[i].absences );
  
            }

            // make average
            const average = arr => arr.reduce( ( p, c ) => p + c, 0 ) / arr.length;
    
            travelt = average( travelt );
            studyt = average( studyt );
            freet = average( freet );
            absencesAmount = average( absencesAmount );
            const BarchartdataArray=[];
            BarchartdataArray.push( travelt , studyt ,freet,absencesAmount  );
            // Set state
          this.setState({ Sex:sex , GG1:FirstGrade , traveltime:travelt, studytime: studyt,freetime:freet,absences:absencesAmount,Barchartdata:BarchartdataArray});

          // console.log(this.state.Barchartdata)


      })
    //   .catch(()=>{
    //     alert('Error retrieving data!!');
    // })
    }



    render() 
    {
      return (

       
        <div> 

         <Bar
        data={{
          labels: ['traveltime', 'studytime', 'freetime', 'absences'],
          datasets: [
            {
              label: 'some random Attr vs average',
              data: this.state.Barchartdata,
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
              data:  this.state.Barchartdata,
              backgroundColor: 'orange',
              borderColor: 'red',
            },
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

