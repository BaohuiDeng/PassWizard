import React, { Component } from 'react'
import {Link, withRouter ,Switch} from 'react-router-dom';

export default class Footer extends Component {
    render() {
        return (
          <div className='container-fluid border-top border-secondary mt-4 mb-4' style={{"background-color":"#313137","color":"whitesmoke"
        }}>
          
          
<footer className="">
  <div className="container p-4">
    <div className="row">
      <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
        <h5 className="text-uppercase">LAPro Team</h5>

        <p>
   We make your website <span style={{"font-size":"30px"}}>stand out</span>. 
      </p> <p> Clean, creative, effective web design.</p>
      </div>

      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 className="text-uppercase">Explore</h5>

        <ul className="list-unstyled mb-0">
          <li>
            <a href="https://flaskpro-advwebtech.herokuapp.com/" class="text-white">Our Last Project</a>
          </li>
          <li>
          <Link to="/aboutus">

            <a href="#!" className="text-white">About Us</a>
          </Link>
          </li>
          <li>
            <a href="#!" className="text-white">Careers</a>
          </li>
          <li>
            <a href="#!" className="text-white">Capabilities</a>
          </li>
          <li>
            <a href="#!" className="text-white">The Social Computing Group</a>
          </li>
        </ul>
      </div>

      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 className="text-uppercase mb-0">Follow Us in  
        <i className="fa fa-github ml-2" aria-hidden="true" style={{"font-size":"30px"}}></i>

       



</h5>

        <ul className="list-unstyled">
          <li>
            <a href="#!" className="text-white">Baohui</a>
          </li>
          <li>
            <a href="#!" className="text-white">Tannaz</a>
          </li>
          <li>
            <a href="#!" className="text-white">Amr</a>
          </li>
          <li>
            <a href="#!" className="text-white">Hesam</a>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div className="text-center p-3" style={{"background-color": "rgba(0, 0, 0, 0.2)"}}>
    © 2021 Copyright:
    <a className="text-white" >LAPro</a>
  </div>
</footer>
           
          </div>

        )
    }
}
