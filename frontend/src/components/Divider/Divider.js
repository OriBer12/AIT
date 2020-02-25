import React, { Component } from 'react';
import './Divider.css';

class Divider extends Component {
   constructor(props){
     super(props);
     this.state = {};
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
      <p className="subtitle fancy"><span>{this.props.text}</span></p>
    );
  }
}

export default Divider;
