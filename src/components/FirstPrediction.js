import React, { Component } from 'react';
import { Row,Col,Container} from 'reactstrap';

import Header from '../components/Header';
import Footer from './Footer';
import BarChart from './BarChart'
import PieChart from './PieChart'
import LineChart from './LineChart'
import BarChartSecond from './BarChartSecond'
import predict from '../assets/images/predict.jpeg';


export default class FirstPrediction extends Component {
    render() {
        return (

          <Container>
            <Header/>

            <div class="card  ">
                        <img src={predict} class="img-fluid" alt="Responsive image" style={{"height":"450px","width":"100%"}}></img>
                        <div class="card-img-overlay">
                            <h1 className="card-title text-center font-weight-bold" style={{"font-size":"49px"}} >Start Prediction!</h1>
                           
                        </div>
                        </div>

            <h3 className="mt-5">Fill in the form to get your result!</h3>

            <Row className="justify-content-sm-center mt-3 ">
            <Col md="6" >

            <div className="card jumbotron border-info mt-5  "> 
                 <form>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
    </div>
    <div className="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
    </div>
  </div>
  <div className="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
  </div>
  <div className="form-group">
    <label for="inputAddress2">Address 2</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" className="form-control" id="inputCity"/>
    </div>
    <div className="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" className="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div className="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" className="form-control" id="inputZip"/>
    </div>
  </div>
  <hr className="my-4"/>
                <p className="lead">
                  <a className="btn btn-primary btn-lg" href="#" role="button">Predict Your Result</a>
                </p>
</form> 
               </div>
            </Col>
            <Col className="mt-5" md="6" >
            <p class="mb-4">
                        <h2 >The most effective attribute </h2>
                       </p>
              <PieChart/>
</Col>
              </Row>

               
            <Footer/>
          </Container>
          

        )
    }
}
