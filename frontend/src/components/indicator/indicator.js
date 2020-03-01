import React, { Component } from 'react';
import './indicator.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
        <h1>{this.props.title}</h1>
        <ProgressBar >
          <ProgressBar variant="success" now={this.props.mtd} key={1} label="MTD" />
          <ProgressBar variant="warning" now={this.props.RR} key={2} label="RR"/>
          <ProgressBar variant="danger" now={this.props.target} key={3}  label="Target"/>
        </ProgressBar>
        <h2>{this.props.caption}</h2>
      </div>
    );
  }
}

export default indicator;
