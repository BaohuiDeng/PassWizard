import React, { Component } from 'react'
import Footer from './Footer'
import { Row,Col,Form,FormGroup,Label,Input,Button} from 'reactstrap';
import {BrowserRouter as Router, Route} from 'react-router-dom'


import location from '../assets/images/location.png';
import googleplus from '../assets/images/googleplus.png';
import whatsapp from '../assets/images/whatsapp.png';
import twitter from '../assets/images/twitter.png';
import email2 from '../assets/images/email2.png';
import phone2 from '../assets/images/phone2.png';
import rss from '../assets/images/rss.png';










export default class ContactUs extends Component {
    render() {
        return (
                <div className="container" >
                    <Row className=" mt-3 ">
                        <Col md="12" className="text-center ">    
                        CONTACT US
                        </Col>

                    </Row>
                    <Row className="justify-content-center mt-3 ">

                        <Col md="5" className="justify-content-center ">
                            <Form className="text-center ">
                                <FormGroup>
                                    {/* <Label for="exampleName">Name</Label> */}
                                    <Input name="Name" id="exampleName" placeholder="Name" />
                                </FormGroup>

                                <FormGroup>
                                    {/* <Label for="exampleEmail">Email</Label> */}
                                    <Input type="email" name="email" id="exampleEmail" placeholder="your Email" />
                                </FormGroup>

                                <FormGroup>
                                    {/* <Label for="exampleText">Message</Label> */}
                                    <Input type="textarea"name="text" id="exampleText" placeholder="Messsage"  />
                                </FormGroup>
                                <Button >Submit</Button>
                            </Form>

                        </Col>
                        <Col md="1"></Col>
                        <Col md="5">
                            <Row className="justify-content-center mt-3 ">
                                <Col md="6" className="justify-content-center text-center">
                                    <img src={location} alt="location" style={{'border': 'none','height': '25px'}}/>   
                                </Col>
                                <Col md="6" className="justify-content-center ">
                                Universität Duisburg-Essen
                                Fakultät für Ingenieurwissenschaften
                                Abteilung INKO
                                Fachgebiet Social Computing
                                47048 Duisburg
                                </Col>

                            </Row>
                            <Row className="justify-content-center mt-3">
                            <Col md="6" className="justify-content-center   text-center">
                                    <img src={email2} alt="email2" style={{'border': 'none','height': '25px'}}/>   
                                </Col>
                                <Col md="6" className="justify-content-center ">
                                    lapro@gmail.com
                                </Col>

                            </Row>
                            <Row className="justify-content-center mt-3">
                            <Col md="6" className="justify-content-center  text-center ">
                                    <img src={phone2} alt="phone2" style={{'border': 'none','height': '25px'}}/>   
                                </Col>
                                <Col md="6" className="justify-content-center ">
                                    +12345678910
                                </Col>

                            </Row>
                            <Row className="text-center mt-3 border-top border-secondary">
                                <Col md="3" className="text-center">
                                    <img src={twitter} alt="twitter" style={{'border': 'none','height': '25px'}}/>   
                                </Col>
                                <Col md="3" className="text-center ">
                                    <img src={whatsapp} alt="whatsapp" style={{'border': 'none','height': '25px'}}/>   
                                </Col>
                                <Col md="3" className="text-center">
                                    <img src={googleplus} alt="googleplus" style={{'border': 'none','height': '25px'}}/>   
                                </Col>
                                <Col md="3" className="text-center">
                                    <img src={rss} alt="rss" style={{'border': 'none','height': '25px'}}/>   
                                </Col>
                            </Row>
                                
                        </Col>

                        
                    </Row>
                    <br></br>
                    <Footer />
                </div>
        )
    }
}
