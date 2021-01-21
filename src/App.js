import React, { Component } from 'react'
import Footer from './Footer'
import { Row,Card, CardTitle, CardText,Col } from 'reactstrap';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './/Header';
import {Link, withRouter ,Switch} from 'react-router-dom';
import machinelearning from '../assets/images/MachineLearning.jpeg'
import ML from '../assets/images/ML.jpeg'
import data from '../assets/images/data.png';

import firststep from '../assets/images/firststep.png';
import secondstep from '../assets/images/secondstep.png';
import thirdstep from '../assets/images/thirdstep.png';








export default class Performance extends Component {
    render() {
        return (
                <div className="container">
                    <Row className="justify-content-sm-start mt-3 ">
                <Header/>

                    <div className="card  text-white">
                      <img src={machinelearning} className="img-fluid" alt="Responsive image" style={{"height":"450px","width":"100%"}}></img>
                      <div className="card-img-overlay">
                          <h1 className="card-title text-center font-weight-bold" style={{"font-size":"49px"}} >Machine Learning</h1>
                          
                      </div>
                    </div> 
                        
                    <div className="container mt-5">
                    <p align="justify">Online education has become very popular and plays a positive impact on learning. Organizations have to consider many factors to make the learning process effective. If these are identified correctly, better results can be obtained. Virtual Learning Environment (VLE) provided by Open University has several factors which effect the student's performance. The purpose of this project is to identify the features that affect the student performance. If these are identified correctly, better results can be obtained. Both students and faculties can be well informed about the progress based on the analysis which provides an opportunity to excel.</p>

                    </div>
                        
                    <div className="col-sm-6">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title font-weight-bold" style={{"color":"#34666F"}}>Data Preprocessing</h5>
                          <p className="card-text justify">
                        The feature engineering part of our analysis consists of merging and feature selection. We used the dataset to train different machine learning algorithms from Scikit-learn. Comparing the different models, we have identified the best suitable model.
                          It is important to merge all the table and pre-process it. All the missing values are removed. After the data pre-processing, the tables are merged to form a main table which is used for our predictive modelling. </p>
                        
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title font-weight-bold" style={{"color":"#34666F"}}>Predictive Models</h5>
                          <p className="card-text justify">
                          Analysis has been performed on the merged table and different models are implemented to compare and identify the best suited for the dataset. The data is splitted in 80% training and 20% testing. The prediction is done among the four classes - Distinction, Pass, Fail and Withdrawn.                              </p>
                        </div>
                      </div>         
                    </div>                                   
              </Row>

            <Row className="justify-content-sm-center mt-3 ">
              <Col md="4" >
                      <Link to="/FirstPrediction">
                          <Card body inverse id="DatasetBox" style={{ height:'200px',textAlign:'center',backgroundColor:'white', paddingTop: '40px' }}>
                              <CardText><img src={firststep} alt="Performance" style={{'border': 'none','height': '90px'}}></img></CardText>
                              <CardTitle tag="h6" style={{"color":"#ffba39"}}>I am at the <b>begining</b> of the semester.</CardTitle>
                          </Card>
                      </Link>
                  </Col> 
                  <Col md="4">
                      <Link to="/SecondPrediction">
                          <Card body inverse  id="VisualizationBox" style={{ height:'200px',backgroundColor:'white' ,textAlign:'center', paddingTop: '40px'}}>
                              <CardText><img src={secondstep} alt="Performance" style={{'border': 'none','height': '90px'}}></img></CardText>
                              <CardTitle tag="h6" style={{"color":"#0d6bd6"}}>I have done <b>one</b> exam.</CardTitle>
                          </Card>
                      </Link>
                  </Col> 
                  <Col md="4">
                      <Link to="/ThirdPrediction">
                          <Card body inverse  id="PerformanceBox" style={{ height:'200px',backgroundColor:'white', textAlign:'center', paddingTop: '40px'}}>
                              <CardText><img src={thirdstep} alt="Performance" style={{'border': 'none','height': '90px'}}></img></CardText>
                              <CardTitle tag="h6" style={{"color":"#24a809"}}>I have done <b>two</b> exams</CardTitle>
                          </Card>
                      </Link>
                  </Col> 
              </Row>
              <br></br>
              <Footer />
          </div>
        )
    }
}
