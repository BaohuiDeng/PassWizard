import React, { Component } from 'react'
import Footer from './Footer'
import { Row,Card, CardTitle, CardText,Col } from 'reactstrap';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import {Link, withRouter ,Switch} from 'react-router-dom';
import datamind from '../assets/images/DataMind.jpeg';
import Header from './/Header';

import globe from '../assets/images/globe.png';
import email from '../assets/images/email.png';
import members from '../assets/images/members.png';
import barchart from '../assets/images/Barchart.png';
import data from '../assets/images/data.png';
import performance from '../assets/images/performance.png';







export default class Dataset extends Component {
    render() {
        return (
                <div className="container">
                    <Row className="justify-content-sm-start mt-3 ">
                    <Header/>
                        {/* <img src={datamind} class="img-fluid" alt="Responsive image"></img> */}
          
                        <div class="card  text-white">
                        <img src={datamind} class="img-fluid" alt="Responsive image" style={{"height":"450px","width":"100%"}}></img>
                        <div class="card-img-overlay">
                            <h1 className="card-title text-center font-weight-bold" style={{"font-size":"49px"}} >Meet Data Visualization</h1>
                           
                        </div>
                        </div>

                        {/* <img src={datamind} class="img-fluid" alt="Responsive image" style={{"height":"450px","width":"100%"}}></img> */}
 
                        <div className="container" style={{}}>
                            <div class="container mt-5 mb-3">
                            <h3>DataSet Description</h3>
                            </div>
                            {/* <div class="row"> */}
                    <div class="container my-5">
                        <div class="card border-info">
                        <div class="card-header font-weight-bold h5" style={{"color":"#34666F"}}>
                        Multivariate dataset                    </div>
                    <div class="card-body">
                        <p class="card-text">
                        <li>There are 46,412 number of records</li>
                <li>The dataset consists of data about courses, students and their interactions with Virtual Learning Environment(VLE) for seven selected courses (called modules)</li>
                <li>Presentations of the course start in February and October</li>
                <li>All tables are stored in the csv format</li>                        </p>
                        </div>
                    </div>
                </div>
                <div class="container mt-5">
                    <div class="card border-info">
                    <div class="card-header font-weight-bold h5"style={{"color":"#34666F"}} >
                    Attributes of dataset                    </div>
                    <div class="card-body">
 
                        <p class="card-text">
                        <li><strong>Gender</strong>: The student’s gender</li>
                    <li><strong>Region</strong>: Identifies the geographic region, where the student lived while taking the module-presentation</li>
                    <li><strong>Highest Education</strong>: Highest student education level on entry to the module presentation</li>
                    <li><strong>Imd Band</strong>: Specifies the Index of Multiple Depravation band of the place where the student lived during the module-presentation</li>
                    <li><strong>Age Group</strong>: Band of the student’s age</li>
                    <li><strong>Number Of Previous Attempts</strong>: The number times the student has attempted this module</li>
                    <li><strong>Semester</strong>: A status flag indicating that the Semester</li>
                    <li><strong>First Module</strong>: Code name of the module, which serves as the identifier</li>
                    <li><strong>Semester </strong>: Code name of the presentation. It consists of the year and “B” for the presentation starting in February and “J” for the presentation starting in October</li>
                    <li><strong>Second Module</strong>: Code name of the module, which serves as the identifier</li>
                    <li><strong>Semester </strong>: Code name of the presentation. It consists of the year and “B” for the presentation starting in February and “J” for the presentation starting in October</li>
                    <li><strong>Final Result</strong>: Student’s final result in the module-presentation</li>                            </p>
                    </div>
                    </div>
                </div>
             
                <div class="container my-5">
                        <div class="card">

                    <div class="card-body">
                        <p class="card-text">
                        <a href="/Visualization" type="button" class="btn btn-large btn-block ">Click here to see the visualization!</a>
                       </p>
                        </div>
                    </div>
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
