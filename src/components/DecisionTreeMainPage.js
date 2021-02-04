import React, { Component }  from 'react'
import { Row,Card, CardTitle, CardText,Col } from 'reactstrap';
import datamind from '../assets/images/DataMind.jpeg';
import Header from './/Header';
import Footer from './Footer';
import FirstTree from './FirstTree';
import SecondTree from './SecondTree';
import ThirdTree from './ThirdTree';

export default class DecisionTreeMainPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
          firstTree:true,
          secondTree:false,
          ThirdTree:false,

          firstTreeBox:'#545F63  ',
          secondTreeBox:'#91A3AA',
          ThirdTreeBox:'#91A3AA',

    
        };
      }



    render() {

        return (

      <div className="container">
        <Header/>
        <div className="card  text-white mb-5">
          <img src={datamind} className="img-fluid" alt="Responsive image" style={{"height":"300px","width":"100%"}}></img>
          <div className="card-img-overlay" style={{position:"absolte"}}>
              <h1 className="card-title text-center font-weight-bold" style={{"font-size":"49px"}} >Decision Tree</h1>
          
          </div>
        </div>
        <Row className="justify-content-sm-start mt-1" >
          <Col md="2" >
            <Card body inverse  id="firsttree" style={{ height:'200px',textAlign:'center', backgroundColor:this.state.firstTreeBox , marginBottom:'25px'}} 
            onClick={e => {e.preventDefault(); this.setState({firstTree:true,secondTree:false,ThirdTree:false,firstTreeBox:'#545F63 ',secondTreeBox:'#91A3AA',ThirdTreeBox:'#91A3AA'})}}>
                <CardText></CardText>
                <CardTitle tag="h6" style={{"color":"white", paddingTop:'50%'}}>First Exam</CardTitle>
                {/* <Button>Button</Button> */}
            </Card>
            <Card body inverse  id="secondtree" style={{ height:'200px',textAlign:'center',backgroundColor:this.state.secondTreeBox, marginBottom:'25px'}}
            onClick={e => {e.preventDefault(); this.setState({firstTree:false,secondTree:true,ThirdTree:false,firstTreeBox:'#91A3AA',secondTreeBox:'#545F63 ',ThirdTreeBox:'#91A3AA'})}}>
                <CardText></CardText>
                <CardTitle tag="h6" style={{"color":"white", paddingTop:'50%'}}>Second Exam</CardTitle>
                {/* <Button>Button</Button> */}
            </Card>
            <Card body inverse   id="thirdtree"  style={{ height:'200px',textAlign:'center',backgroundColor:this.state.ThirdTreeBox}}
            onClick={e => {e.preventDefault(); this.setState({firstTree:false,secondTree:false,ThirdTree:true,firstTreeBox:'#91A3AA',secondTreeBox:'#91A3AA',ThirdTreeBox:'#545F63 '})}}>
                <CardText></CardText>
                <CardTitle tag="h6" style={{"color":"white", paddingTop:'50%'}}>Final Exam</CardTitle>
                {/* <Button>Button</Button> */}
            </Card>
          </Col>
          <Col md="10" >
              {
                  this.state.firstTree &&
                  <FirstTree/>
              }
              {
                  this.state.secondTree &&
                  <SecondTree/>
              }              
              {
                this.state.ThirdTree &&
                <ThirdTree/>
            }


          </Col>
        </Row>
        <Row className="justify-content-sm-start mt-3">
                  
                  <Col md="3" >
                      
                          <Card body inverse  style={{ height:'100px',textAlign:'center',backgroundColor:'#3e8e9e'}}>
                              <CardText></CardText>
                              <CardTitle tag="h6" style={{"color":"white"}}>text</CardTitle>
                              {/* <Button>Button</Button> */}
                          </Card>
                  </Col> 
                  <Col md="3"  >
                          <Card body inverse  style={{ height:'100px',backgroundColor:'#e2975d' ,textAlign:'center'}}>
                              <CardText></CardText>
                              <CardTitle tag="h6" style={{"color":"white"}}>text</CardTitle>
                              {/* <Button color="secondary">Button</Button> */}
                          </Card>
                  </Col> 
                  <Col md="3" >
                          <Card body inverse  style={{ height:'100px',backgroundColor:'rgba(190,91,104)', textAlign:'center'}}>
                              <CardText></CardText>
                              <CardTitle tag="h6" style={{"color":"white"}}>text</CardTitle>

                              {/* <Button color="secondary">Button</Button> */}
                          </Card>
                  </Col> 
                  <Col md="3">
                          <Card body inverse style={{ height:'100px',backgroundColor:'#75678C', textAlign:'center'}}>
                              <CardText></CardText>
                              <CardTitle tag="h6" style={{"color":"white"}}>text</CardTitle>

                              {/* <Button color="secondary">Button</Button> */}
                          </Card>
                  </Col> 
              </Row> 
        
        <Footer/>
      </div>

        )
    }
}