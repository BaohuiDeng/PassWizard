import React, { Component } from 'react';
import { Row,Col,Container} from 'reactstrap';

import Header from './Header';
import Footer from './Footer';




export default class SecondPrediction extends Component {
    render() {
        return (

          <Container>
            <Header/>
              SecondPrediction Page
            <Footer/>
          </Container>
          

        )
    }
}
