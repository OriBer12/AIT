import React, { Component } from 'react';
import './leaderboards.css';

import LeaderBoard from '../leaderboard/leaderboard';


class leaderboards extends Component {
   constructor(props){
     super(props);
     this.data = [{"title":"LeaderBoard","board":[{"name":"Edward Florescu","score":"300","profile_img":"profile1.jfif"},{"name":"Alina Cebanu","score":"289","profile_img":"profile2.jpg"},{"name":"You","score":"250","profile_img":"profile3.jpg"}]}];
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
      {this.data.map((value, index) => {
        return <LeaderBoard key={index} title={value.title} board={value.board}/>
      })}
      </div>
    );
  }
}

export default leaderboards;
