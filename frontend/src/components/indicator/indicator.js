import React, { Component } from 'react';
import './indicator.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
class indicator extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <div className="indicator">
        <h1>Voice</h1>
        <ProgressBar >
          <ProgressBar variant="success" now={50} key={1} label="MTD" />
          <ProgressBar variant="warning" now={10} key={2} label="RR"/>
          <ProgressBar variant="danger" now={40} key={3}  label="Target"/>
        </ProgressBar>
        <h2>12</h2>
      </div>
    );
  }
}

export default indicator;
