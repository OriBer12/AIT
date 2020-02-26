import React, { Component } from 'react';
import './Content.css';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import {Route, NavLink, HashRouter} from "react-router-dom";
import Dashboard from '../Dashboard/Dashboard';
import Panel from '../panel/panel';

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
      <Container>
        <Row>

          <Col lg="9" sm="12">
          <HashRouter>
          <Route path="/dashboard" component={Dashboard}/>
          </HashRouter>
          </Col>

          <Col lg="3" sm="0" className="no-padding d-none d-lg-block"><Panel/></Col>
        </Row>
      </Container>
    );
  }
}

export default Content;
