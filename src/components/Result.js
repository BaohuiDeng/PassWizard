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
                            <Col md="12 my-4 text-center" style={{"color":"green"}}>
                                <h3>Congrats! your result is:</h3>

                            </Col>
                            <Col md="12" >
                            <Card className="my-3 pt-4"body inverse  style={{ height:'200px',backgroundColor:'white', paddingTop: '5px' }}>
                              <CardText></CardText>
                              <CardTitle tag="h6" className='text-center' style={{"color":"darkblue", fontWeight: "bold"}}>
                              <img src={resulticon} classNamw={ 'mr-2'} style={{"width":"90px"}}></img>
                              {this.props.location.result.msg}

                            </CardTitle>
                            {this.props.location.result.msg}
                          </Card>
                  </Col> 
                 
               
               
              </Row>

               
            <Footer/>
          </Container>
          

        )
    }
}
