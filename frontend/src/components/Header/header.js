import React, { Component } from 'react';
import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';

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
          </Navbar>
    );
  }
}

export default header;
