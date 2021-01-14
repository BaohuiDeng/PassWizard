import React, { Component } from 'react';
import { Row,Col,Container} from 'reactstrap';

import logo from '../assets/images/Blacklogo.png';

export default class Header extends Component {
    render() {
        return (

          <Container fluid>
            <Row>
                <Col md="6" style={{'border': 'none','background-color': 'whitesmoke','left': '0', 'text-align': 'center', height:'60px'}}>
                  {/* some header txt */}
                </Col>
            </Row>
          </Container>
          

        )
    }
}
