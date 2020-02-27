import React, { Component } from 'react';
import './Graph.css';
import { Chart } from "react-google-charts";

const data = [
  ["Year", "Sales", "Expenses"],
  ["2004", 1000, 400],
  ["2005", 1170, 460],
  ["2006", 660, 1120],
  ["2007", 1030, 540]
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
