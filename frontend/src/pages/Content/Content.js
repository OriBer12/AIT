import React, { Component } from 'react';
import './Content.css';


//import {Route, HashRouter} from "react-router-dom";
import { Route, HashRouter } from 'react-router-dom'
import Dashboard from '../Dashboard/Dashboard';
import TargetDashboard from '../TargetDashboard';
import Graph from '../Graph/Graph';
import Peers from '../peers/peers';
import Academy from '../AcademyPage/AcademyPage';
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
            <Route exact path="/" component={Dashboard}/>
            <Route path="/dashboard/target" component={TargetDashboard}/>
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route path="/academy" component={Academy}/>
            <Route path="/peers" component={Peers}/>
            <Route path="/asm/dashboard" component={Graph}/>
          </HashRouter>
    );
  }
}

export default Content;
