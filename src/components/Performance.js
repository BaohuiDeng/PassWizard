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
import ReactTooltip from 'react-tooltip';
import HorizontalLinearStepper from './Stepper'




export default class Performance extends Component {
    render() {
        return (
                <div className="container">
                    <Row className="justify-content-sm-center mt-3 ">
                <Header/>

                    <div className="card  text-white" >
                      <img src={machinelearning} className="img-fluid" alt="Responsive image" style={{"height":"300px","width":"100%"}}></img>
                      <div className="card-img-overlay">
                          <h1 className="card-title text-center font-weight-bold" style={{"font-size":"49px"}} >Machine Learning</h1>
                          
                      </div>
                    </div> 

        <div className="container my-3">
          <HorizontalLinearStepper />
          </div>

          <Row className="justify-content-sm-center my-4 ">
            <Col md="4" >
                    <Link to="/FirstPrediction">
                        <Card body inverse className="border-info" id="DatasetBox" style={{ width: '100%' ,height:'200px',textAlign:'center',backgroundColor:'white', paddingTop: '40px' }}>
                            <CardText><img src={firststep} alt="Performance" style={{'border': 'none','height': '80px'}}></img></CardText>
                            <CardTitle tag="h6" style={{color:"#34666F"}}>I am at the <b>begining</b> of the semester.</CardTitle>
                        </Card>
                    </Link>
                </Col> 
                <Col md="4">
                    <Link to="/SecondPrediction">
                        <Card body inverse className="border-info" id="VisualizationBox" style={{width: '100%', height:'200px',backgroundColor:'white' ,textAlign:'center', paddingTop: '40px'}}>
                            <CardText><img src={secondstep} alt="Performance" style={{'border': 'none','height': '80px'}}></img></CardText>
                            <CardTitle tag="h6" style={{"color":"#4454b4"}}>I have done <b>one</b> exam.</CardTitle>
                        </Card>
                    </Link>
                </Col> 
                <Col md="4">
                    <Link to="/ThirdPrediction">
                        <Card body inverse className="border-info" id="PerformanceBox" style={{width: '100%', height:'200px',backgroundColor:'white', textAlign:'center', paddingTop: '40px'}}>
                            <CardText><img src={thirdstep} alt="Performance" style={{'border': 'none','height': '80px'}}></img></CardText>
                            <CardTitle tag="h6" style={{"color":"#c7be4c"}}>I have done <b>two</b> exams</CardTitle>
                        </Card>
                    </Link>
                </Col> 
            </Row>


                      <div  className="container mt-5" style={{"background-color":"#f5f5f1"}}>
                    <div className="container mt-5"  >
                    <div>
              <h1 className="my-5 text-center" data-tip="You can choose three options above to predict your result!" >WHICH STATAGE ARE YOU AT?</h1>
              <ReactTooltip className='extraClass' effect="solid" width="180px" height="100px" />
            </div>
                    <p align="justify">Online education has become very popular and plays a positive impact on learning. Organizations have to consider many factors to make the learning process effective. If these are identified correctly, better results can be obtained. Virtual Learning Environment (VLE) provided by Open University has several factors which effect the student's performance. The purpose of this project is to identify the features that affect the student performance. If these are identified correctly, better results can be obtained. Both students and faculties can be well informed about the progress based on the analysis which provides an opportunity to excel.</p>

                    </div>
                      <div   className="d-flex mb-3">
                    <div className="col-sm-6" >
                      <div className="card border-info" style={{"background-color":"#f5f5f1"}}>
                        <div className="card-body">
                          <h5 className="card-title font-weight-bold" style={{"color":"#34666F"}}>Data Preprocessing</h5>
                          <p className="card-text justify">
                        The feature engineering part of our analysis consists of merging and feature selection. We used the dataset to train different machine learning algorithms from Scikit-learn. Comparing the different models, we have identified the best suitable model.
                          It is important to merge all the table and pre-process it. All the missing values are removed. After the data pre-processing, the tables are merged to form a main table which is used for our predictive modelling. </p>
                        
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-6 mt-2 mb-2">
                      <div className="card border-info" style={{"background-color":"#f5f5f1"}}>
                        <div className="card-body">
                          <h5 className="card-title font-weight-bold" style={{"color":"#34666F"}}>Predictive Models</h5>
                          <p className="card-text justify">
                          Analysis has been performed on the merged table and different models are implemented to compare and identify the best suited for the dataset. The data is splitted in 80% training and 20% testing. The prediction is done among the four classes - Distinction, Pass, Fail and Withdrawn.                              </p>
                        </div>
                      </div>         
                    </div>
                    </div>
                    </div>
                   
                                     
              </Row>

      

  
              <br></br>
              <Footer />
          </div>
        )
    }
}
