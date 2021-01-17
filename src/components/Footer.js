import React, { Component } from 'react'
export default class Footer extends Component {
    render() {
        return (
          <div className='container-fluid border-top border-secondary mt-4 mb-4' style={{"background-color":"rgb(43, 43, 43,0.5)"
        }}>
          
          
<footer class="">
  <div class="container p-4">
    <div class="row">
      <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
        <h5 class="text-uppercase">LAPro Team</h5>

        <p>
   We make your website <span style={{"font-size":"30px"}}>stand out</span>. 
      </p> <p> Clean, creative, effective web design.</p>
      </div>

      <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 class="text-uppercase">Explore</h5>

        <ul class="list-unstyled mb-0">
          <li>
            <a href="https://flaskpro-advwebtech.herokuapp.com/" class="text-dark">Our Last Project</a>
          </li>
          <li>
            <a href="#!" class="text-dark">About Us</a>
          </li>
          <li>
            <a href="#!" class="text-dark">Careers</a>
          </li>
          <li>
            <a href="#!" class="text-dark">Capabilities</a>
          </li>
          <li>
            <a href="#!" class="text-dark">The Social Computing Group</a>
          </li>
        </ul>
      </div>

      <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 class="text-uppercase mb-0">Follow Us in  
        <i class="fa fa-github ml-2" aria-hidden="true" style={{"font-size":"30px"}}></i>

       



</h5>

        <ul class="list-unstyled">
          <li>
            <a href="#!" class="text-dark">Baohui</a>
          </li>
          <li>
            <a href="#!" class="text-dark">Tannaz</a>
          </li>
          <li>
            <a href="#!" class="text-dark">Amr</a>
          </li>
          <li>
            <a href="#!" class="text-dark">Hesam</a>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="text-center p-3" style={{"background-color": "rgba(0, 0, 0, 0.2)"}}>
    © 2021 Copyright:
    <a class="text-dark" href="https://mdbootstrap.com/">LAPro</a>
  </div>
</footer>
            {/* <footer className="page-footer font-small  ">
              <div className="footer-copyright text-center  py-3">© 2021 Copyright:
                  <a href="" style={{color: '#5c7d92'}}> LAPro </a>
              </div>
              </footer> */}
          </div>

        )
    }
}
