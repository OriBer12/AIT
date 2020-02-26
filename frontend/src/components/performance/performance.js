import React, { Component } from 'react';
import './performance.css';
import Indicator from '../indicator/indicator';
class performance extends Component {
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
      <div className="performance">
      <Indicator/>
      <Indicator/>
      <Indicator/>
      </div>
    );
  }
}

export default performance;
