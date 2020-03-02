import React, { Component } from 'react';
import './VideoCard.css';
import YouTube from '@u-wave/react-youtube';
import Card from 'react-bootstrap/Card';

class VideoCard extends Component {
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
      <Card className="VideoCard">
      <YouTube
        video={this.props.movie}
      />
      <Card.Footer>
        <div className="footer">{this.props.caption}</div>
      </Card.Footer>
      </Card>
    );
  }
}

export default VideoCard;
