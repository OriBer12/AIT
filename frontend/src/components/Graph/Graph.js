import React, { Component } from 'react';
import './Graph.css';
import { Chart } from "react-google-charts";

const data = [
  ["Date", "Sales"],
  ["1.2", 20],
  ["2.2", 18],
  ["3.2", 21],
  ["4.2", 22],
  ["5.2", 20],
  ["6.2", 23],
  ["7.2", 24],
  ["8.2", 25],
  ["9.2", 26],
  ["10.2", 27],
  ["11.2", 28],
  ["12.2", 29],
  ["13.2", 23],
  ["14.2", 18],
  ["15.2", 19],
  ["16.2", 18]

];
class Graph extends Component {
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
    const options = {
      title: "",
      hAxis: { title: "Date", viewWindow: { min: 0, max: 15 } },
      
      curveType: "function",
      legend: { position: "bottom" }
    };    return (
      <div className={"my-pretty-chart-container"}>
        <Chart
          chartType="LineChart"
          width="100%"
          height="320px"
          data={data}
          options={options}
        />
      </div>
    );
  }
}

export default Graph;
