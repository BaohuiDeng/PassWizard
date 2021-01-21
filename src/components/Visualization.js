import React, { Component } from 'react'
import Footer from './Footer'
import { Row,Card, CardTitle, CardText,Col } from 'reactstrap';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './/Header';

import {Link, withRouter ,Switch} from 'react-router-dom';


import globe from '../assets/images/globe.png';
import email from '../assets/images/email.png';
import members from '../assets/images/members.png';
import barchart from '../assets/images/Barchart.png';
import data from '../assets/images/data.png';
import performance from '../assets/images/performance.png';
import BarChart from './BarChart'
import PieChart from './PieChart'
import LineChart from './LineChart'






export default class Visualization extends Component {
    render() {
        return (
                <div className="container">
                    {/* <Row className="justify-content-sm-start mt-3 "> */}
                    <Header/>

                    <div class="container my-5">
                        <div class="">

                    <div class="card-body">
                        <p class="card-text">
                        <h3 >You can find some charts here. Let's have a look for better perspective</h3>
                       </p>
                        </div>
                    </div>
                </div>

                            <div class="row">
                    <div class="col-sm-6">
                        <div class="card" style={{"height":"350px","width":"470px"}}>
                        
                    <div class="card-body">
                    <div style={{"width": "400px", "height": "400px"}}>
                                    <BarChart/>
                                </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card" style={{"height":"350px","width":"470px"}}>
                   
                    <div class="card-body">
                    <div style={{"width": "400px", "height": "400px"}}>
                    <h5 onclick="zoom()">Zoom</h5>
                        <PieChart onclick="zoom()"/>
                                </div>
                    </div>
                    </div>
                </div>
                <div class="col-sm-6 mt-2">
                    <div class="card" style={{"height":"350px","width":"470px"}}>
                    
                    <div class="card-body">
                    <div style={{"width": "400px", "height": "400px"}}>
                                    <LineChart/>
                                </div>                    </div>
                    </div>
                </div>
                <div class="col-sm-6 mt-2">
                    <div class="card" style={{"height":"350px","width":"470px"}}>
                    
                    <div class="card-body">
                    <div style={{"width": "400px", "height": "400px"}}>
                                    <BarChart/>
                                </div>                    </div>
                    </div>
                </div>
                </div>
                
           
                    {/* </Row> */}
                    <br></br>
                    <Footer />
                </div>
        )
    }
}
