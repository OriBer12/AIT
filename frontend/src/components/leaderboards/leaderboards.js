import React, { Component } from 'react';
import './leaderboards.css';

import LeaderBoard from '../leaderboard/leaderboard';


class leaderboards extends Component {
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
      <div>
      {this.props.data.map((value, index) => {
        return <LeaderBoard key={index} title={value.title} board={value.board}/>
      })}
      </div>
    );
  }
}

export default leaderboards;
