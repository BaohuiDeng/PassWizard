import React, { Component } from 'react'
import Footer from './Footer'
import { Row,Card, CardTitle, CardText,Col } from 'reactstrap';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './/Header';
import member from '../assets/images/MMembers.png';
import aboutus from '../assets/images/aboutus.png';
import teamwork from '../assets/images/teamwork.jpeg';

import {Link, withRouter ,Switch} from 'react-router-dom';


import globe from '../assets/images/globe.png';
import email from '../assets/images/email.png';
import members from '../assets/images/members.png';
import barchart from '../assets/images/Barchart.png';
import data from '../assets/images/data.png';
import performance from '../assets/images/performance.png';







export default class AboutUs extends Component {
    render() {
        return (
                <div className="container">
                    <Row className="justify-content-sm-start mt-3 ">
            <Header/>
           
                        <div class="row my-5">
            <div class="col-sm-6">
                <div class="card">
                <img src={teamwork} class="img-responsive" alt="Image"/>

                </div>
            </div>
            <div class="col-sm-6">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Team Members</h5>
                    <p class="card-text">With supporting text be
                    ng text below as a natural leng text below as a natural le
                    low as a natural lead-in 
                    ng text below as a natural le
                    ng text below as a natural leto additional content.</p>
                </div>
                </div>
            </div>
            </div>

                       
            <div class="d-flex container justify-content-center1" style={{"height":"150px"}}>
                    <div class="koffer-icon mx-5">
                    <img src={aboutus} height="65px"/>
                    <p class="ptitle">WHO WE ARE</p>
                        </div>  
                    <div class="koffer-icon mx-5">
                    <img src={member} height="65px"/>
                    <p class="ptitle">WHERE WE AT</p>
                        </div>  
                    <div class="koffer-icon mx-5">
                    <img src={aboutus} height="65px"/>
                    <p class="ptitle">HIRE US</p>
                        </div>  
            </div> 
                    </Row>
                    <br></br>
                    <Footer />
                </div>
        )
    }
}
