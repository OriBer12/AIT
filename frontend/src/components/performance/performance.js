import React, { Component } from 'react';
import './performance.css';
import Indicator from '../indicator/indicator';

class performance extends Component {
   constructor(props){
     super(props);
    // this.state = {};
   }

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
      {this.props.data.map((value, index) => {
        return <Indicator key={index} title={value.title}  mtd={value.mtd} RR={value.RR} target={value.target} caption={value.caption}/>
      })}
      </div>
    );
  }
}

export default performance;
