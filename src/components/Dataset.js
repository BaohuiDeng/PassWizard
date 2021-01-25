import React, { Component } from 'react'
import Footer from './Footer'
import { Row,Card, CardTitle, CardText,Col } from 'reactstrap';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import dataViz from '../assets/images/dataViz.png';
import {Link, withRouter ,Switch} from 'react-router-dom';
import datamind from '../assets/images/DataMind.jpeg';
import Header from './/Header';
import PermDataSettingIcon from '@material-ui/icons/PermDataSetting';
import globe from '../assets/images/globe.png';
import email from '../assets/images/email.png';
import members from '../assets/images/members.png';
import barchart from '../assets/images/Barchart.png';
import data from '../assets/images/data.png';
import performance from '../assets/images/performance.png';
import AssessmentIcon from '@material-ui/icons/Assessment';






export default class Dataset extends Component {
    render() {
        return (
                <div className="container">
                    <Row className="justify-content-sm-start mt-3 ">
                    <Header/>
                        {/* <img src={datamind} class="img-fluid" alt="Responsive image"></img> */}
          
                        <div className="card  text-white">
                        <img src={datamind} className="img-fluid" alt="Responsive image" style={{"height":"450px","width":"100%"}}></img>
                        <div className="card-img-overlay">
                            <h1 className="card-title text-center font-weight-bold" style={{"font-size":"49px"}} >Meet Data Visualization</h1>
                           
                        </div>
                        </div>

                        {/* <img src={datamind} class="img-fluid" alt="Responsive image" style={{"height":"450px","width":"100%"}}></img> */}
 
                        <div className="container" style={{}}>
                            <div className="container mt-5 mb-3">
                            <h3> DataSet Description</h3>
                            </div>
                            {/* <div class="row"> */}
                    <div className="container my-5">
                        <div className="card border-info">
                        <div className="card-header font-weight-bold h5" style={{"color":"#34666F","background-color":"#B2C0C1"}}>
                        <PermDataSettingIcon></PermDataSettingIcon>Multivariate dataset                    </div>
                    <div className="card-body">
                        <p className="card-text">
                        <li>There are 46,412 number of records</li>
                <li>The dataset consists of data about courses, students and their interactions with Virtual Learning Environment(VLE) for seven selected courses (called modules)</li>
                <li>Presentations of the course start in February and October</li>
                <li>All tables are stored in the csv format</li>                        </p>
                        </div>
                    </div>
                </div>
                <div className="container mt-5">
                    <div className="card border-info">
                    <div className="card-header font-weight-bold h5"style={{"color":"#34666F","background-color":"#B2C0C1"}} >
                   <AssessmentIcon></AssessmentIcon> Attributes of dataset                    </div>
                    <div className="card-body">
 
                        <p className="card-text">
                        <li><strong style={{color:"#34666F"}}>Gender</strong>: The student’s gender</li>
                    <li><strong style={{color:"#34666F"}}>Region</strong>: Identifies the geographic region, where the student lived while taking the module-presentation</li>
                    <li><strong style={{color:"#34666F"}}>Highest Education</strong>: Highest student education level on entry to the module presentation</li>
                    <li><strong style={{color:"#34666F"}}>Imd Band</strong>: Specifies the Index of Multiple Depravation band of the place where the student lived during the module-presentation</li>
                    <li><strong style={{color:"#34666F"}}>Age Group</strong>: Band of the student’s age</li>
                    <li><strong style={{color:"#34666F"}}>Number Of Previous Attempts</strong>: The number times the student has attempted this module</li>
                    <li><strong style={{color:"#34666F"}}>Semester</strong>: A status flag indicating that the Semester</li>
                    <li><strong style={{color:"#34666F"}}>First Module</strong>: Code name of the module, which serves as the identifier</li>
                    <li><strong style={{color:"#34666F"}}>Semester </strong>: Code name of the presentation. It consists of the year and “B” for the presentation starting in February and “J” for the presentation starting in October</li>
                    <li><strong style={{color:"#34666F"}}>Second Module</strong>: Code name of the module, which serves as the identifier</li>
                    <li><strong style={{color:"#34666F"}}>Semester </strong>: Code name of the presentation. It consists of the year and “B” for the presentation starting in February and “J” for the presentation starting in October</li>
                    <li><strong style={{color:"#34666F"}}>Final Result</strong>: Student’s final result in the module-presentation</li>                            </p>
                    </div>
                    </div>
                </div>
             
                {/* <div class="container my-5" style={{"background-color":"#a5826a"}} >

                    <div class="card-body" >
                        <a href="/Visualization" type="button" class="text-decoration-none">
                            <h3 class="font-weight-bold" style={{"color":"white"}}>Click here to see the visualization!</h3>
                            </a>
                       
                    </div>
                </div> */}
                <div className="mt-4">
                 <Link to="/Visualization" style={{ textDecoration: 'none' }}>
                          <Card body inverse id="DatasetBox"  style={{ height:'200px',textAlign:'center',backgroundColor:'white', paddingTop: '40px' }}>
                              <CardText><img src={dataViz} alt="Performance" style={{'border': 'none','height': '100px'}}></img></CardText>
                              <CardTitle tag="h5"  style={{"color":"#ffba39","font-weight":"bold"}}>Click <b>to</b> see the visualization! </CardTitle>
                          </Card>
                      </Link>
                      </div>

                </div>
                {/* </div> */}
                
                
                

       
                       
                    </Row>
                    <br></br>
                    <Footer />
                </div>
        )
    }
}
