import React, { Component } from 'react';
import { Row,Col,Container} from 'reactstrap';
import logo from '../assets/images/Blacklogo.png';
import goal from '../assets/images/goal.png'
export default class Header extends Component {
    render() {
        return (

          <Container fluid>
<nav class="navbar navbar-expand-lg navbar-light" style={{"height":"100px"}}>
  <div class="container-fluid justify-content-between">
    <div class="d-flex">
    

      
       
    </div>

    <ul class="navbar-nav flex-row d-none d-md-flex">
      <li class="nav-item me-3 me-lg-1 active">
      
    
      </li>

      <li class="nav-item me-3 me-lg-1">
   
      </li>

      <li class="nav-item me-3 me-lg-1">
      
      </li>

      <li class="nav-item me-3 me-lg-1">
      
      </li>

      <li class="nav-item me-3 me-lg-1">
     
      </li>
    </ul>

    <ul class="navbar-nav flex-row">
      <li class="nav-item me-3 me-lg-1">
        <a class="nav-link d-sm-flex align-items-sm-center" href="#">
        <img
          src={goal}
          height="30"
          alt=""
          loading="lazy"
          style={{"margin-top": "2px;"}}
        />
          <strong class="d-none d-sm-block ms-1">
            
            Last Project</strong>
        </a>
      </li>
      <li class="nav-item me-3 me-lg-1">
        <a class="nav-link" href="#">
          <span>        <i class="fa fa-github " aria-hidden="true" style={{"font-size":"25px","color":"#ba7d9d"}}></i>
</span>
        </a>
      </li>
      <li class="nav-item  me-3 me-lg-1">
      <a class="nav-link" href="#">
          <span>        <i class="fa fa-linkedin " aria-hidden="true" style={{"font-size":"25px","color":"#a0b9ba"}}></i>
</span>
        </a>
      </li>
      <li class="nav-item  me-3 me-lg-1">
      <a class="nav-link" href="#">
          <span> 
            <i class="fa fa-xing " aria-hidden="true" style={{"font-size":"25px","color":"rgba(233,216,141)"}}></i>
</span>
        </a>
      </li>
   
     
    </ul>
  </div>
</nav>
          </Container>
          

        )
    }
}
