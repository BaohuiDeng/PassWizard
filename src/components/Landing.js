import React, { Component } from 'react'
import Footer from './Footer'
import { Row,Card, CardTitle, CardText,Col } from 'reactstrap';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import {Link, withRouter ,Switch} from 'react-router-dom';


import globe from '../assets/images/globe.png';
import email from '../assets/images/email.png';
import members from '../assets/images/members.png';
import barchart from '../assets/images/Barchart.png';
import data from '../assets/images/data.png';
import performance from '../assets/images/performance.png';







export default class Landing extends Component {
    render() {
        return (
            <Route>
                <div className="container">

                    
                    <Row className="justify-content-sm-start mt-3 ">
                        <Col md="3">
                            <Link to="/Dataset">
                                <Card body inverse id="DatasetBox" style={{ height:'200px',textAlign:'center',backgroundColor:'rgba(204, 204, 204, 0.411)',borderColor:'rgb(24, 103, 167)', paddingTop: '40px' }}>
                                    <CardText><img src={data} alt="phone" style={{'border': 'none','height': '60px'}}/></CardText>
                                    <CardTitle tag="h6">Dataset</CardTitle>
                                    {/* <Button>Button</Button> */}
                                </Card>
                            </Link>
                        </Col> 
                        <Col md="3">
                            <Link to="/Visualization">
                                <Card body inverse  id="VisualizationBox" style={{ height:'200px',backgroundColor:'rgba(204, 204, 204, 0.411)' ,borderColor:'rgb(49, 143, 20)',textAlign:'center', paddingTop: '40px'}}>
                                    <CardText><img src={barchart} alt="phone" style={{'border': 'none','height': '60px'}}/></CardText>
                                    <CardTitle tag="h6">Visualization</CardTitle>
                                    {/* <Button color="secondary">Button</Button> */}
                                </Card>
                            </Link>
                        </Col> 
                        <Col md="3">
                            <Link to="/Performance">
                                <Card body inverse  id="PerformanceBox" style={{ height:'200px',backgroundColor:'rgba(204, 204, 204, 0.411)', borderColor:'rgb(228, 118, 118)', textAlign:'center', paddingTop: '40px'}}>
                                    <CardText><img src={performance} alt="phone" style={{'border': 'none','height': '60px'}}/></CardText>
                                    <CardTitle tag="h6">Performance</CardTitle>

                                    {/* <Button color="secondary">Button</Button> */}
                                </Card>
                            </Link>
                        </Col> 
                    </Row> 
                    

                    
                    <Row className="justify-content-sm-start mt-4 ">
                        <Col md="3">
                            <a href="https://www.uni-due.de/soco/" target="_blank">
                                <Card body inverse id="socoBox" style={{ height:'200px',textAlign:'center',backgroundColor:'rgba(204, 204, 204, 0.411)',borderColor:'rgb(214, 167, 35)', paddingTop: '40px'}}>
                                    <CardText><img src={globe} alt="phone" style={{'border': 'none','height': '60px'}}/></CardText>
                                    <CardTitle tag="h6">Social Computing Group</CardTitle>
                                    {/* <Button color="secondary">Button</Button> */}
                                </Card>
                            </a>
                        </Col> 
                        <Col md="3">
                            <Link to="/AboutUs">
                                <Card body inverse  id="AboutUsBox"  style={{ height:'200px',textAlign:'center',backgroundColor:'rgba(204, 204, 204, 0.411)' , borderColor:'rgb(20, 135, 143)', paddingTop: '40px'}}>
                                <CardText><img src={members} alt="phone" style={{'border': 'none','height': '60px'}}/></CardText>
                                    <CardTitle tag="h6">About us</CardTitle>

                                    {/* <Button color="secondary">Button</Button> */}
                                </Card>
                            </Link>
                        </Col> 
                    </Row>  

                    <Row className="justify-content-sm-start mt-4 ">
                        <Col md="3">
                            <Link to="/ContactUs">
                                <Card body inverse  id="ContactUsBox"  style={{ height:'200px',textAlign:'center',backgroundColor:'rgba(204, 204, 204, 0.411)',borderColor:'rgb(167, 24, 24)', paddingTop: '40px'}}>
                                <CardText><img src={email} alt="phone" style={{'border': 'none','height': '60px'}}/></CardText>
                                    <CardTitle tag="h6">Contact us</CardTitle>

                                    {/* <Button color="secondary">Button</Button> */}
                                </Card>
                            </Link>
                        </Col> 
                    </Row>  


                    <br></br>
                    <Footer />
                </div>
            </Route>
        )
    }
}
