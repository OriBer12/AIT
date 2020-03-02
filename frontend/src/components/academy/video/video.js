import React, { Component } from 'react';
import './video.css';
import YouTube from '@u-wave/react-youtube';

class video extends Component {
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
      <div className="video">
      <YouTube
        video="Ff6jaAWkjkM"
      />
      <p>Watch the latest Samsung S20 review</p>
      </div>
    );
  }
}

export default video;
