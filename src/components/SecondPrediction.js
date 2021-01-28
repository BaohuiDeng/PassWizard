import React, { Component } from 'react';
import { Row,Col,Container,Input} from 'reactstrap';
import Button from '@material-ui/core/Button';
import Header from '../components/Header';
import Footer from './Footer';
import PieChartSecond from './PieChartSecond';
import predict from '../assets/images/predict.jpeg';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import HorizontalLinearStepper1 from './Stepper2';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value) {
  return `${value}°C`;
}

export default class SecondPrediction extends Component {


  constructor(props) {
    super(props);
    this.state = {

      higher:'0',
      absences:'0',
      failures:'0',
      WeekendAlcohol:'0',
      MotherEducational:'0',
      FatherEducational:'0',
      FirstGrade:'0',
      predictResult:''    ,
      examFailures:'',
      examHigher:'',
      examFirstGrade:''  
    };

    // This binding is necessary to make `this` work in the callback
    this.predict = this.predict.bind(this);
    this.seeChart = this.seeChart.bind(this)
  }

  seeChart(){
    console.log("failure",this.state.examFailures,"higher",this.state.examHigher,"first grade",this.state.examFirstGrade)
  }

  predict(e) {

    e.preventDefault()
    const data = { 
      "higher": this.state.higher,
      "absences": this.state.absences,
      "failures": this.state.failures,
      "Walc": this.state.WeekendAlcohol,
      "Medu": this.state.MotherEducational,
      "Fedu": this.state.FatherrEducational,
      "G1": this.state.FirstGrade
    };
    axios.post(`http://20.82.112.97:5000/predict/por/G2`, data)
    .then(res => {
      const result = res.data;
      // console.log(result)

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

  }

    render() {
        return (

          <Container>
            <Header/>

            <div class="card  ">
                        <img src={predict} class="img-fluid" alt="Responsive image" style={{"height":"450px","width":"100%"}}></img>
                        <div class="card-img-overlay">
                            <h1 className="card-title text-center font-weight-bold text-white" style={{"font-size":"49px"}} >Start Prediction!</h1>  
                        </div>
                        </div>
                        <div className="container mt-4">
            <HorizontalLinearStepper1  />
            </div>
            <Row className="justify-content-sm-center mt-3 ">
              <Col className="mt-5" md="6">

              <form className="border-info border p-3">
  <div class="form-group">
    <label for="customRange1" class="form-label my-3">Your first exam grade:</label><br/>

      <Slider
        defaultValue={5}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        marks
        min={0}
        max={20}
      />
  </div>
  <div className="form-group my-3">
      <label>Number of exam failures:</label>
      <Input type="select" name="select" id="failures" onChange={e => {this.setState({'examFailures': e.target.value})}}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">else</option>
      </Input>
    </div>
  <div className="form-check my-4">
    <input type="checkbox" className="form-check-input " id="exampleCheck1" onChange={e => {this.setState({'examHigher': e.target.value})}}/>
    <label className="form-check-label" for="exampleCheck1">Are you willing to take higher education?</label>
  </div>
  <Button onClick={this.seeChart} size="large" variant="outlined" color="primary">
                <span  className="mr-2">See the chart</span> <BubbleChartIcon></BubbleChartIcon>
                </Button>
                </form>
              </Col>

            <Col className="mt-2" md="6" >
                <PieChartSecond/>
            </Col>
            </Row>
          <div className="container mt-5" style={{"background-color":"grey","height":"150px"}}>
            <h3 className=" text-center" style={{"top":"40%"}}  >Fill in the form to get your result!</h3>
            </div>
            <Row className="justify-content-sm-center mt-3 ">
            <Col md="6" >

            <div className="card  border-info mt-5   p-3 mb-5   "> 
                 <form>
  <div className="form-row">
    <div className="form-group col-md-12">
      <label>Do you want to take higher education:</label>
      <Input type="select" name="select" id="higher" onChange={e => {this.setState({'higher': e.target.value})}}>
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
          max="93"
          id="absences"
          placeholder="0~93"
          onChange={e => {this.setState({'absences': e.target.value})}}
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
      <Input type="select" name="select" id="FatherrEducational" onChange={e => {this.setState({'FatherrEducational': e.target.value})}}>
            <option value="0">none</option>
            <option value="1">primary education (4th grade)</option>
            <option value="2">5th to 9th grade</option>
            <option value="3">secondary education</option>
            <option value="4">higher education</option>
      </Input>
    </div>
  </div>
  <div className="form-row">      
    <div className="form-group col-md-12"> 
      <label >The grade of your first exam:</label>
      <Input
          type="number"
          name="number"
          min="0"
          max="20"
          id="FirstGrade"
          placeholder="0~20"
          onChange={e => {this.setState({'FirstGrade': e.target.value})}}
        />

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
            </Row>

         


               
            <Footer/>
          </Container>

        )
    }
}
