import React, { Component } from 'react';
import './panel.css';

import Leaderboards from '../leaderboards/leaderboards';
import Academy from '../academy/academy';
import Container from 'react-bootstrap/Container';

class panel extends Component {
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
        <Leaderboards/>
        <Academy/>
      </Container>
    );
  }
}

export default panel;
