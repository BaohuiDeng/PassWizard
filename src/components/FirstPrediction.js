import React, { Component } from 'react';
import { Row,Col,Container} from 'reactstrap';

import Header from './Header';
import Footer from './Footer';



export default class FirstPrediction extends Component {
    render() {
        return (

          <Container>
            <Header/>
              FirstPrediction Page
            <Footer/>
          </Container>
          

        )
    }
}
