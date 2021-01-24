import {Pie} from 'react-chartjs-2'
import React, { Component } from 'react';
import axios from 'axios';



export default  class PieChart extends Component {
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

    componentDidMount() {

      axios.get(`http://20.82.112.97:5000/alldata`)
      .then(res => {
        const data = res.data;
        this.setState({allInfo:data})
        
         console.log(this.state.allInfo["0"].school)

        // Create a new array based on current state:
        let absences= [];
        let examFailure = [];
        let montherEdu = [];
        let gradeFirst = [];
        let fatherEdu =[];

        for (var i = 0; i < this.state.allInfo.length; i++) {
              // console.log(this.state.allInfo[i].GG1)
              // retrieving sex
              absences.push(this.state.allInfo[i].absences );
              // retriving first Grade
              examFailure.push(this.state.allInfo[i].failures );             
              montherEdu.push(this.state.allInfo[i].Medu );
              fatherEdu.push(this.state.allInfo[i].Fedu);
              gradeFirst.push(this.state.allInfo[i].G1);
  
            }

            // make average
            // const average = arr => arr.reduce( ( p, c ) => p + c, 0 ) / arr.length;
    
            // travelt = average( travelt );
            // studyt = average( studyt );
            // freet = average( freet );
            // absencesAmount = average( absencesAmount );
            const BarchartdataArray=[];
            BarchartdataArray.push( absences,examFailure,montherEdu,fatherEdu,gradeFirst );
            // Set state
          this.setState({      
          absences:absences,
          examFailure:examFailure,
          montherEdu:montherEdu,
          fatherEdu:fatherEdu,
          gradeFirst:gradeFirst,
          Barchartdata:BarchartdataArray
      });

          // console.log(this.state.Barchartdata)


      })
    //   .catch(()=>{
    //     alert('Error retrieving data!!');
    // })
    }


render()
{
    return (<div> 
         <Pie
        data={{
          labels: ['School absences', 'Exam failure', 'Mother education', 'Father education', 'Grade of first exam'],
          datasets: [
            {
              label: '# of votes',
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
          title:{
            display:true,
            text:'The most effective attributes'
          },
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
          //onClick:alertBox,
        }}

      />
    </div>
    )
  }
}
