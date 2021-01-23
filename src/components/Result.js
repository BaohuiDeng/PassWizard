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
import predict from '../assets/images/predict.jpeg';
import Stepper3 from '../components/Stepper3'

export default class Result extends Component {


    render() {

        return (

          <Container>
            <Header/>

            <div class="card  ">
                        <img src={predict} class="img-fluid" alt="Responsive image" style={{"height":"450px","width":"100%"}}></img>
                        <div class="card-img-overlay">
                            <h1 className="card-title text-center font-weight-bold" style={{"font-size":"49px"}} >Your Result!</h1>
                           
                        </div>
                        </div>
                        <div className="container mt-5">

                        <Stepper3/>            </div>

                        <Row className="justify-content-sm-center mt-3 ">
                            <Col md="12 my-4">
                                <h3>Congrats! your result is:</h3>

                            </Col>
              <Col md="12" >
                          <Card body inverse  style={{ height:'200px',backgroundColor:'white', paddingTop: '5px' }}>
                              <CardText><p>jdlkakelknlkef</p></CardText>
                              <CardTitle tag="h6" style={{"color":"black"}}>I am at the begining of the semester
                              he begining of the sehe begining of the sehe begining of the 
                              he begining of the se                              he begining of the sehe begining of the sehe begining of the 
                              he begining of the sehe begining of the sehe begining of the 
                              he begining of the sehe begining of the sehe begining of the 
                              he begining of the sehe begining of the sehe begining of the 
                              he begining of the sehe begining of the sehe begining of the 

                              he begining of the sesehe begining of the sehe begining of the se
                              .</CardTitle>
                          </Card>
                  </Col> 
                 
               
               
              </Row>

               
            <Footer/>
          </Container>
          

        )
    }
}
