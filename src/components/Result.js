import React, { Component } from 'react';
import { Row,Container,Card, CardTitle, CardText,Col} from 'reactstrap';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';
import Header from '../components/Header';
import Footer from './Footer';
import BarChart from './BarChart'
import PieChart from './PieChart'
import LineChart from './LineChart'
import BarChartSecond from './BarChartSecond'
import result from '../assets/images/result.jpg';
import resulticon from '../assets/images/resulticon.png';

import Stepper3 from '../components/Stepper3'

export default class Result extends Component {


    render() {

        return (

          <Container>
            <Header/>

            <div class="card  ">
                        <img src={result} class="img-fluid" alt="Responsive image" style={{"height":"450px","width":"100%"}}></img>
                        <div class="card-img-overlay">
                            <h1 className="card-title text-center font-weight-bold text-white" style={{"font-size":"49px"}} >Your Result!</h1>
                           
                        </div>
                        </div>
                        <div className="container mt-5">

                        <Stepper3/>            </div>

                        <Row className="mt-3 ">
                            <Col md="12 my-4 text-center" >

                              {
                                this.props.location.result.msg2 && this.props.location.result.msg2 != 'fail'  &&
                                <h4 style={{"color":"#55c242"}}>Congrats! You will success.</h4>
                              }
                              
                              {
                               this.props.location.result.msg44 && this.props.location.result.msg44!= 'fail'  &&
                                <h4 style={{"color":"#55c242"}}>Congrats! You will success.</h4>
                              }
                              {
                                this.props.location.result.msg66 && this.props.location.result.msg66 != 'fail' &&
                                <h4 style={{"color":"#55c242"}}>Congrats! You will success.</h4>
                              }
                              {
                                this.props.location.result.msg2 && this.props.location.result.msg2 == 'fail' &&
                                <h4 style={{"color":"#ff6542"}}>Unfortunately! you will not pass.</h4>
                              }
                                                            {
                               this.props.location.result.msg44 && this.props.location.result.msg44 == 'fail'  &&
                                <h4 style={{"color":"#ff6542"}}>Unfortunately! you will not pass.</h4>
                              }
                              {
                               this.props.location.result.msg66 && this.props.location.result.msg66 == 'fail' &&
                                <h4 style={{"color":"#ff6542"}}>Unfortunately! you will not pass.</h4>
                              }
                                
                            </Col>
                            <Col md="12" >
                            <Card className="my-3 pt-4"body inverse  style={{ height:'200px',backgroundColor:'white', paddingTop: '5px' }}>
                              <CardText></CardText>
                              <CardTitle tag="h6" className='text-center' style={{"color":"darkblue", fontWeight: "bold"}}>
                                <Col md="4" >
                                  <img src={resulticon} className={ 'mr-2'} style={{"width":"90px" , marginLeft:"30px"}}></img>
                                </Col>
                                <Col md="12" style={{ marginTop:"-80px"}} >
                                {
                                  this.props.location.result.msg1  &&
                                  <p>
                                    The prediction of your First exam with the accuracy of &nbsp; 
                                    {this.props.location.result.msg1}
                                    &nbsp;is&nbsp;  
                                    {this.props.location.result.msg2}
                                    <br></br>
                                    <br></br>
                                    The prediction of your Srcond exam with the accuracy of &nbsp; 
                                    {this.props.location.result.msg3}
                                    &nbsp;is&nbsp;  
                                    {this.props.location.result.msg4}
                                    <br></br>
                                    <br></br>
                                    The prediction of your Third exam with the accuracy of &nbsp; 
                                    {this.props.location.result.msg5}
                                    &nbsp;is&nbsp;  
                                    {this.props.location.result.msg6}
                                  </p>
                                }
                                  
                                  {
                                  this.props.location.result.msg33  &&
                                  <p>
                                    The prediction of your Second exam with the accuracy of &nbsp;  
                                    {this.props.location.result.msg33}
                                    &nbsp; is &nbsp;  
                                    {this.props.location.result.msg44}
                                  </p>                          
                                  }

                                  {
                                  this.props.location.result.msg55  &&
                                  <p>
                                    The prediction of your Third exam with the accuracy of &nbsp;   
                                    {this.props.location.result.msg55}
                                    &nbsp;is&nbsp;  
                                    {this.props.location.result.msg66}
                                  </p>                          
                                  }                                
                                </Col>
                              
                            </CardTitle>
                            {/* {this.props.location.result.msg1} */}
                          </Card>
                  </Col> 
                 
               
               
              </Row>

               
            <Footer/>
          </Container>
          

        )
    }
}
