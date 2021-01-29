import {Pie} from 'react-chartjs-2'
import React, { Component } from 'react';
import axios from 'axios';



export default  class PieChartSecond extends Component {
  constructor() {
    super()
    this.state = 
      {
        firstExamGrade:'',
        allInfo:'',
        GG1:'',
        // absences:'',
        // examFailure:'',
        // montherEdu:'',
        // fatherEdu:'',
        absences2:'',
        examFailure2:'',
        montherEdu2:'',
        fatherEdu2:'',
        absences3:'',
        examFailure3:'',
        montherEdu3:'',
        fatherEdu3:'',
        numberOfPass:'',
        higher2:'',
        // Barchartdata:'',
        BarchartdataSecond:'',
        BarchartdataThird:''
      }
    }

    componentDidMount() {

      axios.get(`http://20.82.112.97:5000/alldata`)
      .then(res => {
        const data = res.data;
        this.setState({allInfo:data})
        
         console.log(this.state.allInfo["0"].school)

        // Create a new array based on current state:
        // let absences= [];
        // let examFailure = [];
        // let montherEdu = [];
        // let fatherEdu =[];
        let absences2= [];
        let examFailure2 = [];
        let montherEdu2 = [];
        let fatherEdu2 =[];
        // let absences3= [];
        // let examFailure3 = [];
        // let montherEdu3 = [];
        // let fatherEdu3 =[];
        let firstExamGrade =[]
        let  numberOfPass=[];
        let GC1 = [];
        let higher1=[]
        let higher2=[]

        
         for (var i = 0; i < this.state.allInfo.length; i++) {
           
            if(this.state.allInfo[i].GC2 == "pass"){
              absences2.push(this.state.allInfo[i].absences );
              // retriving first Grade
              examFailure2.push(this.state.allInfo[i].failures );             
              montherEdu2.push(this.state.allInfo[i].Medu );
              fatherEdu2.push(this.state.allInfo[i].Fedu);
              firstExamGrade.push(this.state.allInfo[i].G1);
              GC1.push(this.state.allInfo[i].GC1)
              numberOfPass = GC1.length
              if(this.state.allInfo[i].higher=="yes"){
                higher1.push(this.state.allInfo[i].higher);
                higher2 = higher1.length

              }

            }
         

          }
            // make average
            const average = arr => arr.reduce( ( p, c ) => p + c, 0 ) / arr.length;
    
              // absences = average(  absences );
              // examFailure = average( examFailure);
              // montherEdu = average( montherEdu);
              // fatherEdu = average( fatherEdu );
            absences2 = average(  absences2 );
            examFailure2 = average( examFailure2);
            montherEdu2 = average( montherEdu2);
            fatherEdu2 = average( fatherEdu2 );
            firstExamGrade = average(firstExamGrade)
           // const BarchartdataArray=[];
            const BarchartdataArraySecond=[];

           // BarchartdataArray.push( absences,examFailure,montherEdu,fatherEdu );
            BarchartdataArraySecond.push(    
               examFailure2,firstExamGrade,higher2
               )
            // Set state
          this.setState({  
        
          examFailure2:examFailure2,
         
          firstExamGrade:firstExamGrade,    
     
          higher2:higher2,
          BarchartdataSecond:BarchartdataArraySecond,

      });

      })
   
    }


render()
{
    return (<div> 
         <Pie
        data={{
          labels: ['Exam Failure','First Grade','higher'],
          datasets: [
            {
              label: 'G1',
              data: [70,20,10],
              backgroundColor: [
                '#be5168',
                '#3e8e9e',
                '#e2975d',
               


               
               
              ],
              borderColor: [
                // 'rgba(255, 99, 132, 1)',
                // 'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
            // {
            //   label: 'G2',
            //   data: this.state.BarchartdataSecond,
            //   backgroundColor: [
            //     '#3e8e9e', 
            //     '#e9d88f',
            //     '#447c6a',
            //     '#525144',
                
            //   ],
            //   // borderColor: 'red',
            // },
          ],
        }}
        height={200}
        width={300}
        options={{
          title:{
            display:true,
            text:'The Most Effective Attributes On Grade 2'
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
