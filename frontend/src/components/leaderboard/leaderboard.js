import React, { Component } from 'react';
import './leaderboard.css';

import BoardItem from '../boardItem/boardItem';
import Card from 'react-bootstrap/Card'
class leaderboard extends Component {
   constructor(props){
     super(props);

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
      <Card.Title className="dashboard-card-title">{this.props.title}</Card.Title>
      <Card.Body className="leaderboard-body">
      {this.props.board.map((value, index) => {
        return <BoardItem key={index} name={value.name} score={value.score}  img={value.profile_img}/>
      })}
      </Card.Body>
      <Card.Footer className="dashboard-card-footer">
        <p className="dashboard-card-footer-header">show more</p>
      </Card.Footer>

      </Card>
    );
  }
}

export default leaderboard;
