import React, { Component } from 'react';
import { Row,Col,Container,Input} from 'reactstrap';
import Button from '@material-ui/core/Button';
import Header from './Header';
import Result from './Result';
import Footer from './Footer';
import PieChart from './PieChart';
import predict from '../assets/images/predict.jpeg';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import HorizontalLinearStepper1 from './Stepper2';
import axios from 'axios';



export default class FirstPrediction extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numberOfabsences:'0',
      school:'0',
      higher:'0',
      failures:'0',
      studyTime:'0',
      WorkdayAlcohol:'0',
      WeekendAlcohol:'0',
      MotherEducational:'0',
      FatherEducational:'0',
      predictResult:''
      
        
    };

    // This binding is necessary to make `this` work in the callback
    this.predict = this.predict.bind(this);
  }


  predict(e) {

    e.preventDefault()
    const data = { 
      "failures":this.state.failures,
      "higher": this.state.higher,
      "Dalc": this.state.WorkdayAlcohol,
      "Walc": this.state.WeekendAlcohol,
      "studytime": this.state.studyTime,
      "school": this.state.school,
      "absences": this.state.numberOfabsences,
      "Fedu": this.state.FatherEducational,
      "Medu": this.state.MotherEducational
    };
    axios.post(`http://20.82.112.97:5000/predict/por/pf`, data)
    .then(res => {
      const result = res.data;
      console.log(result)

      this.setState({predictResult:result})

      if (result){
        this.props.history.push({ 
          pathname: '/PredictionResult',
          result:result
         });

      }else{
        alert('Error predicting data!!')
      }
      

    })
    .catch(()=>{
        alert('Error retrieving data!!');
    })     
   



    // console.log(

    //   this.state
    // )


  }



    render() {

        return (

        
          <Container>
          
            <Header/>

            <div class="card  ">
                        <img src={predict} class="img-fluid" alt="Responsive image" style={{"height":"450px","width":"100%"}}></img>
                        <div class="card-img-overlay">
                            <h1 className="card-title text-center font-weight-bold text-white" style={{"font-size":"49px"}} >Start Predict all of your Grades!</h1>
                           
                        </div>
                        </div>
                        <div className="container mt-4">
            <HorizontalLinearStepper1  />
            </div>

            <h3 className="mt-5">Fill in the form to get your result!</h3>

            <Row className="justify-content-sm-center mt-3 ">
            <Col md="6" >

            <div className="card jumbotron border-info mt-5  shadow-lg p-3 mb-5  rounded "> 
                 <form>
  <div className="form-row">
    <div className="form-group col-md-12">
      <label>Which school did you attend:</label>
      <Input type="select" name="select" id="school"  onChange={e => {this.setState({'school': e.target.value})}}>
            <option value="0">Gabriel Pereira</option>
            <option value="1">Mousinho da Silveira</option>
      </Input>
    </div>
  </div>
  <div className="form-row">
    <div className="form-group col-md-12">
      <label>Do you want to take higher education:</label>
      <Input type="select" name="select" id="higher" onChange={e => {this.setState({'school': e.target.value})}}>
            <option value="0">Yes</option>
            <option value="1">No</option>
      </Input>
    </div>
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label>Number of school absences:</label>
      <Input
          type="number"
          name="number"
          min="0"
          max="32"
          id="numberOfabsences"
          placeholder="0~32"
          onChange={e => {this.setState({'numberOfabsences': e.target.value})}}
        />
    </div>
    <div className="form-group col-md-6">
      <label>Number of exam failures:</label>
      <Input type="select" name="select" id="failures" onChange={e => {this.setState({'failures': e.target.value})}}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">else</option>
      </Input>
    </div>
  </div>
  <div className="form-row">
    <div className="form-group col-md-12">
      <label>Weekly study time:</label>
      <Input type="select" name="select" id="studyTime" onChange={e => {this.setState({'studyTime': e.target.value})}}>
            <option value="0">-</option>
            <option value="1">fewer than 2 hours</option>
            <option value="2">2 to 5 hours</option>
            <option value="3">5 to 10 hours</option>
            <option value="4">more than 10 hours</option>
      </Input>
    </div>
  </div>

  <div className="form-row">
    <div className="form-group col-md-6">
      <label>Workday alcohol consumption:</label>
      <Input type="select" name="select" id="WorkdayAlcohol" onChange={e => {this.setState({'WorkdayAlcohol': e.target.value})}}>
            <option value="0">very low</option>
            <option value="1">low</option>
            <option value="2">neutral</option>
            <option value="3">high</option>
            <option value="4">very high</option>
      </Input>
    </div>
    <div className="form-group col-md-6">
      <label>Weekend alcohol consumption:</label>
      <Input type="select" name="select" id="WeekendAlcohol" onChange={e => {this.setState({'WeekendAlcohol': e.target.value})}}>
      <option value="0">very low</option>
            <option value="1">low</option>
            <option value="2">neutral</option>
            <option value="3">high</option>
            <option value="4">very high</option>
      </Input>
    </div>
  </div>
  <div className="form-row">      
    <div className="form-group col-md-6">
      <label>Mother educational background:</label>
      <Input type="select" name="select" id="MotherEducational" onChange={e => {this.setState({'MotherEducational': e.target.value})}}>
            <option value="0">none</option>
            <option value="1">primary education (4th grade)</option>
            <option value="2">5th to 9th grade</option>
            <option value="3">secondary education</option>
            <option value="4">higher education</option>
      </Input>
    </div>
    <div className="form-group col-md-6">
      <label>Father educational background:</label>
      <Input type="select" name="select" id="FatherEducational" onChange={e => {this.setState({'FatherEducational': e.target.value})}}>
            <option value="0">none</option>
            <option value="1">primary education (4th grade)</option>
            <option value="2">5th to 9th grade</option>
            <option value="3">secondary education</option>
            <option value="4">higher education</option>
      </Input>
    </div>
  </div>


  <hr className="my-4"/>
                <p className="lead">
                  {/* <a className="btn btn-primary btn-lg" href="#" role="button">Predict Your Result</a> */}
                </p>
                <Button onClick={this.predict} size="large" variant="outlined" color="primary">
                <span  className="mr-2">Predict Your Result</span> <AddToQueueIcon></AddToQueueIcon>

</Button>

</form> 
               </div>
            </Col>
            <Col className="mt-5" md="6" >
              <p class="mb-4">The most effective attribute</p>
                <PieChart/>
            </Col>
            </Row>

               
            <Footer/>
          </Container>
          

        )
    }
}
