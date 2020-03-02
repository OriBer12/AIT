import React, { Component } from 'react';
import './VideoCategory.css';

import VideoCard from '../VideoCard/VideoCard';

class VideoCategory extends Component {
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
    console.log(this.props.category)
    return (
      <div className="VideoCategory">
        <h1>{this.props.data.category}</h1>
        <div className="movies-container">
        {
          this.props.data.movies.map((value,index)=>{
            return <VideoCard key={index} movie={value.movie_id} caption={value.caption}/>;
          })
        }


        </div>
      </div>
    );
  }
}

export default VideoCategory;
