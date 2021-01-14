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







export default class Performance extends Component {
    render() {
        return (
                <div className="container">
                    <Row className="justify-content-sm-start mt-3 ">

                    Performance Page
                    
                    </Row>
                    <br></br>
                    <Footer />
                </div>
        )
    }
}
