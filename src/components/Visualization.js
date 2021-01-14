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
import BarChart from './BarChart'
import PieChart from './PieChart'
import LineChart from './LineChart'






export default class Visualization extends Component {
    render() {
        return (
                <div className="container">
                    {/* <Row className="justify-content-sm-start mt-3 "> */}
                    <table>
                <tbody>
                    <tr>
                        <td>
                            <div align="center">
                                <h6>Passing Percentage based on IMD-Band</h6>
                            </div>
                            <div align="center">
                            <div style={{"width": "350px", "height": "350px"}}>
                                    <BarChart/>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div align="center">
                                <h6>Grade distribution regarding Gender</h6>
                            </div>
                            <div align="center">
                            <div style={{"width": "350px", "height": "350px"}}>
                                <PieChart/>
                                </div>
                            </div>
                        </td> 
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>
                            <div align="center">
                                <h6>Passing Percentage based on IMD-Band</h6>
                            </div>
                            <div align="center">
                            <div style={{"width": "350px", "height": "350px"}}>
                                    <LineChart/>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div align="center">
                                <h6>Grade distribution regarding Gender</h6>
                            </div>
                            <div align="center">
                            <div style={{"width": "350px", "height": "350px"}}>
                                <PieChart/>
                                </div>
                            </div>
                        </td> 
                    </tr>
                </tbody>
            </table>
                    {/* </Row> */}
                    <br></br>
                    <Footer />
                </div>
        )
    }
}
