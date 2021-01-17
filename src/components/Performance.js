import React, { Component } from 'react'
import Footer from './Footer'
import { Row,Card, CardTitle, CardText,Col } from 'reactstrap';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './/Header';
import {Link, withRouter ,Switch} from 'react-router-dom';
import machinelearning from '../assets/images/MachineLearning.jpeg'
import ML from '../assets/images/ML.jpeg'
import data from '../assets/images/data.png';

import globe from '../assets/images/globe.png';
import email from '../assets/images/email.png';
import members from '../assets/images/members.png';
import barchart from '../assets/images/Barchart.png';
import performance from '../assets/images/performance.png';







export default class Performance extends Component {
    render() {
        return (
                <div className="container">
                    <Row className="justify-content-sm-start mt-3 ">
                <Header/>

                    <div class="card  text-white">
                        <img src={machinelearning} class="img-fluid" alt="Responsive image" style={{"height":"450px","width":"100%"}}></img>
                        <div class="card-img-overlay">
                            <h1 className="card-title text-center font-weight-bold" style={{"font-size":"49px"}} >Machine Learning</h1>
                           
                        </div>
                        </div> 
                        
                        <div class="container mt-5">
                        <p align="justify">Online education has become very popular and plays a positive impact on learning. Organizations have to consider many factors to make the learning process effective. If these are identified correctly, better results can be obtained. Virtual Learning Environment (VLE) provided by Open University has several factors which effect the student's performance. The purpose of this project is to identify the features that affect the student performance. If these are identified correctly, better results can be obtained. Both students and faculties can be well informed about the progress based on the analysis which provides an opportunity to excel.</p>

                        </div>
                        
                      <div class="col-sm-6">
                        <div class="card border-info">
                          <div class="card-body">
                            <h5 class="card-title font-weight-bold" style={{"color":"#34666F"}}>Data Preprocessing</h5>
                            <p class="card-text justify">
                         The feature engineering part of our analysis consists of merging and feature selection. We used the dataset to train different machine learning algorithms from Scikit-learn. Comparing the different models, we have identified the best suitable model.
                It is important to merge all the table and pre-process it. All the missing values are removed. After the data pre-processing, the tables are merged to form a main table which is used for our predictive modelling. </p>
                          
                          </div>
                        </div>
                      
                   
                    </div>
                    <div class="col-sm-6">
                      <div class="card border-info">
                          <div class="card-body">
                            <h5 class="card-title font-weight-bold" style={{"color":"#34666F"}}>Predictive Models</h5>
                            <p class="card-text justify">
                            Analysis has been performed on the merged table and different models are implemented to compare and identify the best suited for the dataset. The data is splitted in 80% training and 20% testing. The prediction is done among the four classes - Distinction, Pass, Fail and Withdrawn.                              </p>
                          </div>
                        </div>         
                      </div>
                    <div class="card jumbotron border-info mt-5  ">
                <h1 class="display-4">Hello, world!</h1>
                <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Password" />
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
  </div>
  <div class="form-group">
    <label for="inputAddress2">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity"/>
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" class="form-control" id="inputZip"/>
    </div>
  </div>
  <hr class="my-4"/>
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p class="lead">
                  <a class="btn btn-primary btn-lg" href="#" role="button">Predict Your Result</a>
                </p>
</form>
               
              </div>
                                     
                    </Row>
                    <br></br>
                    <Footer />
                </div>
        )
    }
}
