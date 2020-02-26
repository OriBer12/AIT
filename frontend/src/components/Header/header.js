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



          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="nav navbar-nav ml-auto">
              <li className="nav-item active">
                <div className="icon-container">
                <a className="nav-link" href="#">
                <FontAwesomeIcon className="icon" icon="users" />
                </a>
                <p>Peers</p>
                </div>
              </li>
              <li className="nav-item">
              <div className="icon-container">
              <a className="nav-link" href="#">
              <FontAwesomeIcon className="icon" icon="lightbulb" />
              </a>
              <p>Training</p>
              </div>
              </li>
              <li className="nav-item">
              <div className="icon-container">
              <a className="nav-link" href="#">
              <FontAwesomeIcon className="icon" icon="bell" />
              </a>
              <p>Alert</p>
              </div>
              </li>
              <li className="nav-item">
              <div className="icon-container">
              <a className="nav-link" href="#">
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
