import React, { Component } from 'react';
import './quiz.css';

class quiz extends Component {
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
      <div className="quiz">
      <img src={process.env.PUBLIC_URL + "/" + "kahoot.png"}/>
        <p>Take the daily quiz
        Samsung S20 vs. Huawei p40 Pro</p>
      </div>
    );
  }
}

export default quiz;
