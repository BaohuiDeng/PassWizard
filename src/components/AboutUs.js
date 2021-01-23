import React, { Component } from 'react'
import Footer from './Footer'
import { Row,Card, CardTitle, CardText,Col } from 'reactstrap';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './/Header';
import member from '../assets/images/MMembers.png';
import teamwork from '../assets/images/aboutus.jpg';
import GroupIcon from '@material-ui/icons/Group';
import {Link, withRouter ,Switch} from 'react-router-dom';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import LocationCityIcon from '@material-ui/icons/LocationCity';
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
           
            <div class="card  text-white">
                        <img src={teamwork} class="img-fluid" alt="Responsive image" style={{"height":"450px","width":"100%"}}></img>
                        <div class="card-img-overlay">
                            <h1 className="card-title text-center font-weight-bold" style={{"font-size":"49px","color":"black"}} >Our Team</h1>
                           
                        </div>
                        </div> 

         
                <div class="">
                <div class="card-body my-5">
                    <h5 class="card-title ">Team Members</h5>
                    <p class="card-text ">With supporting text be
                    ng text below as a natural leng text below as a natural le
                    low as a natural lead-in 
                    With supporting text be ng text below as a natural leng text below as a natural le low as a natural lead-in ng text below as a natural le ng text below as a natural leto additional content.
                    With supporting text be ng text below as a natural leng text below as a natural le low as a natural lead-in ng text below as a natural le ng text below as a natural leto additional content.
                    ng text below as a natural le
                    ng text below as a natural leto additional content.</p>
                </div>
                </div>

                       
            <div class="d-flex container justify-content-center1" style={{"height":"150px"}}>
                    <div class=" mx-5 mt-3">
                      <GroupIcon style={{ fontSize: 65 }}></GroupIcon>
                    {/* <img src={aboutus} height="65px"/> */}
                    <p class="ptitle">WHO WE ARE</p>
                        </div>  
                    <div class=" mx-5 mt-3">
                      <LocationCityIcon  className="primary"style={{ fontSize: 65 }}></LocationCityIcon>
                    {/* <img src={member} height="65px"/> */}
                    <p class="ptitle">WHERE WE AT</p>
                        </div>  
                    <div class="mx-5 mt-3">
                      <HomeWorkIcon  style={{ fontSize: 65 }}></HomeWorkIcon>
                    {/* <img src={aboutus} height="65px"/> */}
                    <p class="ptitle">HIRE US</p>
                        </div>  
            </div> 

    

  <div class="container mt-4 ">
    <div class="boxes d-flex">
    <div class="card border-info text-center mx-2 col-sm-6">
    <div class="card-body">
      <div class="box ">
        <img class="icon" src="https://img.icons8.com/plasticine/100/000000/html.png"/>
      <h3><span class="text-primary">Frontend</span></h3>

      <div class="feature">
         HTML / CSS / Javascript
      </div>
      <div class="feature">
        Angular / AngularJS
      </div>
        <div class="feature">
        React
      </div>
        <div class="feature">
         Bootstrap
      </div>
   
      <div class="feature">
         Wordpress
      </div>
      <div class="feature">
         Git version control
      </div>
      <div class="feature">
        Responsive layout and design
      </div>
  </div>
  </div>
    </div>
    <div class="card border-info text-center col-sm-6 mx-2">
    <div class="card-body">
    <div class="box">
          <img class="icon" style={{"max-width":"100%","height":"auto"}} src="https://img.icons8.com/bubbles/100/000000/database.png"/>
        <h3><span class="text-primary ">Backend</span></h3>
        <div class="feature">
         Python
        </div>
          <div class="feature">
        Flask
        </div>
          <div class="feature">
         NodeJS
        </div>
        <div class="feature">
     C++
        </div>
        <div class="feature">
     MySQL
        </div>
        <div class="feature">
       MongoDB
        </div>
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
