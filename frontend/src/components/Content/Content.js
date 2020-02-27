import React, { Component } from 'react';
import './Content.css';


import {Route, NavLink, HashRouter} from "react-router-dom";
import Dashboard from '../Dashboard/Dashboard';


class Content extends Component {
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
          <HashRouter>
          <Route path="/dashboard" component={Dashboard}/>
          </HashRouter>
    );
  }
}

export default Content;
