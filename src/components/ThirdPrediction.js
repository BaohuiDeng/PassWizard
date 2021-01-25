import React, { Component } from 'react';
import { Row,Col,Container,Input} from 'reactstrap';
import Button from '@material-ui/core/Button';
import Header from '../components/Header';
import Footer from './Footer';
import PieChart from './PieChart'
import predict from '../assets/images/predict.jpeg';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import HorizontalLinearStepper1 from './Stepper2';
import axios from 'axios';





export default class SecondPrediction extends Component {



  constructor(props) {
    super(props);
    this.state = {

      FirstGrade:'0',
      SecondGrade:'0',
      predictResult:''      
    };

    // This binding is necessary to make `this` work in the callback
    this.predict = this.predict.bind(this);
  }


  predict(e) {

    e.preventDefault()
    const data = { 
          "G1": this.state.FirstGrade,
          "G2": this.state.SecondGrade
      };
    axios.post(`http://20.82.112.97:5000/predict/por/G3`, data)
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

  

    // console.log(

    //   this.state
    // )


  }

    render() {
        return (

          <Container>
            <Header/>

            <div class="card ">
                        <img src={predict} class="img-fluid" alt="Responsive image" style={{"height":"450px","width":"100%"}}></img>
                        <div class="card-img-overlay">
                            <h1 className="card-title text-center font-weight-bold text-white" style={{"font-size":"49px"}} >Start Prediction!</h1>
                           
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
  <div className="form-group col-md-6">
      <label>The grade of the first exam:</label>
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
    <div className="form-group col-md-6">
      <label>The grade of the second:</label>
      <Input
          type="number"
          name="number"
          min="0"
          max="20"
          id="SecondGrade"
          placeholder="0~20"
          onChange={e => {this.setState({'SecondGrade': e.target.value})}}
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
            <Col className="mt-5" md="6" >
              <p class="mb-4">The most effective attribute </p>
                <PieChart/>
            </Col>
            </Row>

               
            <Footer/>
          </Container>

        )
    }
}
