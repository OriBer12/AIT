import React, { Component } from 'react';
import './Graph.css';


const svgSquare = {
  shape: 'rect',
  _collapsed: true,

  nodeSvgShape: {
            shape: 'rect',
            shapeProps: {
              width: 15,
              height: 15,
              x: -15,
              y: -15,
              fill: 'red',
            },
          }
        }

const style = {
  links: {
    x: 140,
    y: 40
  }
}


const myTreeData =  [
  {
    name: 'You',
    _collapsed: true,
    progress: 30,

    children:[
      {
        name: 'Retail Store Bacau',
        progress: 50
      },
      {
        name: 'Retail Store Bacau',
        progress: 10
      },
      {
        name: 'Retail Store Bacau',
        progress: 80
      }


    ]

  },
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

  onClick() {

  }
  render() {
    return (
      <div>
      </div>
    );
  }
}

export default Graph;
