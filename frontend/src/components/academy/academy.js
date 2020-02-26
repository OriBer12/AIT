import React, { Component } from 'react';
import './academy.css';
import Card from 'react-bootstrap/Card'
import YouTube from '@u-wave/react-youtube';

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
      <Card.Body className="leaderboard-body">
      <YouTube
        video="un-rfEyPBO4"
      />
      </Card.Body>
      <Card.Footer className="dashboard-card-footer">
        <p className="dashboard-card-footer-header">show more</p>
      </Card.Footer>

      </Card>

    );
  }
}

export default academy;
