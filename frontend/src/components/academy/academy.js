import React, { Component } from 'react';
import './academy.css';
import Card from 'react-bootstrap/Card'
import Video from './video';
import Quiz from './quiz';

class academy extends Component {
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
      <Card className="dashboard-card">
      <Card.Title className="dashboard-card-title">My Academy</Card.Title>
      <Card.Body className="academy-body">
        <Video/>
        <Quiz/>
      </Card.Body>
      <Card.Footer className="dashboard-card-footer">
        <p className="dashboard-card-footer-header">show more</p>
      </Card.Footer>

      </Card>

    );
  }
}

export default academy;
