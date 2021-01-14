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
                            <h1 className="card-title text-center font-weight-bold" style={{"font-size":"49px"}} >Meet Data Visualization!</h1>
                           
                        </div>
                        </div>

                        {/* <img src={datamind} class="img-fluid" alt="Responsive image" style={{"height":"450px","width":"100%"}}></img> */}
 
                        <div className="container" style={{}}>
                            <div class="container mt-5 mb-3">
                            <h3>DataSet Description</h3>
                            </div>
                            <div class="row">
                    <div class="col-sm-6">
                        <div class="card">
                        <div class="card-header">
                        Featured
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card">
                    <div class="card-header">
                        Featured
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    </div>
                </div>
                <div class="col-sm-6 mt-2">
                    <div class="card">
                    <div class="card-header">
                        Featured
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    </div>
                </div>
                <div class="col-sm-6 mt-2">
                    <div class="card">
                    <div class="card-header">
                        Featured
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    </div>
                </div>
                </div>
                </div>
                .
                <div class="container" style={{}}>
                    
                    <button type="button" class="btn btn-large btn-block btn-default">Click here to see visualization</button>
                    
                </div>
                

       
                       
                    </Row>
                    <br></br>
                    <Footer />
                </div>
        )
    }
}
