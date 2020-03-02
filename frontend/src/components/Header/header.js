import React, { Component } from 'react';
import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Redirect } from 'react-router';
import Dropdown from 'react-bootstrap/Dropdown';

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
  handleOnClick = () => {
    // some action...
    // then redirect
    this.setState({redirect: true});
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/academy" />;
    }

    return (
      <Navbar variant="dark">
        <Navbar.Brand href="#home">
        <img
          alt=""
          src={process.env.PUBLIC_URL + "/" + "download.png"}
          width="50"
          height="50"
          className="d-inline-block align-top"
        />{' '}
          </Navbar.Brand>
          <div className="account-container">
          <p>Hello Bogdan</p>
          </div>



          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="nav navbar-nav ml-auto">
              <li className="nav-item active">
                <div className="icon-container">
                <a className="nav-link" href="/#/peers">
                <FontAwesomeIcon className="icon" icon="users" />
                </a>
                <p>My peers</p>
                </div>
              </li>
              <li className="nav-item">
              <div className="icon-container">
              <a className="nav-link" href="/#/academy">
              <FontAwesomeIcon className="icon"  icon="university" />
              </a>
              <p>Academy</p>
              </div>
              </li>
              <li className="nav-item">
              <div className="icon-container">
              <Dropdown>
                <Dropdown.Toggle variant="success" bsPrefix="my_btn" id="dropdown-basic">
                  <FontAwesomeIcon icon="user" />
                </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Well done! You are already half way to beating your Business Users target!</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Have you checked the new clip on How Best to Sell iPhone11?</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Its Election Day today – We are expecting a surge in customers. Remember to smile</Dropdown.Item>
                  </Dropdown.Menu>
              </Dropdown>
              <p>Alerts</p>
              </div>
              </li>
              <li className=" account-flex nav-item">
              <div className="account-container">
              <a className="nav-link" href="#">
                <img className="account-img" src={process.env.PUBLIC_URL + "/" + "profile4.png"}/>
              </a>

              </div>
              </li>
            </ul>
          </div>
      </Navbar>
    );
  }
}

export default header;
