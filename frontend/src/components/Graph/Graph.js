import React, { Component } from 'react';
import './Graph.css';
import { Chart } from "react-google-charts";


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
    };
    return (
      <div className={"my-pretty-chart-container"}>
        <Chart
          chartType= {this.props.type}
          width={this.props.width}
          height={this.props.height}
          data={this.props.data}
          options={options}
        />
      </div>
    );
  }
}

export default Graph;
