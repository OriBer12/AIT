import React, { Component } from 'react';
import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class header extends Component {
   constructor(props){
     super(props);
     this.state = {};
   }

  // componentWillMount(){}
   componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    console.log("Render");
    return (
      <Navbar variant="dark">
        <Navbar.Brand href="#home">
        <img
          alt=""
          src={process.env.PUBLIC_URL + "/" + "vodafone_logo.png"}
          width="100"

          className="d-inline-block align-top"
        />{' '}
          </Navbar.Brand>



          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="nav navbar-nav ml-auto">
              <li class="nav-item active">
                <div className="icon-container">
                <a class="nav-link" href="#">
                <FontAwesomeIcon className="icon" icon="users" />
                </a>
                <p>Peers</p>
                </div>
              </li>
              <li class="nav-item">
              <div className="icon-container">
              <a class="nav-link" href="#">
              <FontAwesomeIcon className="icon" icon="lightbulb" />
              </a>
              <p>Training</p>
              </div>
              </li>
              <li class="nav-item">
              <div className="icon-container">
              <a class="nav-link" href="#">
              <FontAwesomeIcon className="icon" icon="bell" />
              </a>
              <p>Alert</p>
              </div>
              </li>
              <li class="nav-item">
              <div className="icon-container">
              <a class="nav-link" href="#">
              <FontAwesomeIcon className="icon" icon="envelope" />
              </a>
              <p>Inbox</p>
              </div>
              </li>
            </ul>
          </div>
      </Navbar>
    );
  }
}

export default header;
