import React,{ Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { Row,Col,Card,Container,Nav,NavLink} from 'reactstrap';

import {Link, withRouter ,Switch} from 'react-router-dom';

import MetisMenu from 'react-metismenu';

import Header from './components/Header';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Dataset from './components/Dataset';
import Performance from './components/Performance';
import Visualization from './components/Visualization';
import Landing from './components/Landing';
import NotFound from './components/NotFound';

import logo from './assets/images/whitelogo.png';


const menu = [
    {
      icon: '',
      label: <img src={logo} alt="Logo" style={{'border': 'none','height': '100px', 'paddingTop': '20px','paddingBottom': '20px'}}/>,
      to: '#',
    },
    {
      icon: '',
      label: 'Home',
      to: '/',
    },
    {
      icon: '',
      label: 'Data',
      content: [
        {
          icon: '',
          label: 'Dataset',
          to: '/Dataset',
        },
        {
          icon: '',
          label: 'Visualizaion',
          to: '/Visualization',
        },
      ],
    },
    {
      icon: '',
      label: 'Prediction',
      to: '/Performance',
    },
    {
      icon: '',
      label: 'Social Computing Group',
      externalLink: true,
      to: 'https://www.uni-due.de/soco/',
    },
  ];


function App() {
  return (
    
    <div className="App">
      <Router>
      

        <Container fluid>
              <Row>
                  <Col md="2">
                      <MetisMenu
                      content={menu}
                      activeLinkFromLocation
                      />
                  </Col>
                  <Col   >

                    <Switch>
                      <Route exact path="/" component = {Landing} />
                      <Route exact path="/Dataset" component = {Dataset} />
                      <Route exact path="/Visualization" component = {Visualization} />
                      <Route exact path="/Performance" component = {Performance} />
                      <Route exact path="/AboutUs" component = {AboutUs} />
                      <Route exact path="/ContactUs" component = {ContactUs} />
                      <Route   component= {NotFound} />
                    </Switch>

                  </Col>
              </Row>
          </Container>


      </Router>

    </div>


  );
}

export default App;
