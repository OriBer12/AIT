import React, { Component } from 'react';
import './carouselItem.css';
import Carousel from 'react-bootstrap/Carousel'

class carouselItem extends Component {
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
      <Carousel.Item>
        <div className="carouselItem">
          <div className="crousel-item-content">
            <span className="notify-badge">Special Offer</span>
            <img className="crousel-img" src={process.env.PUBLIC_URL + "/" + this.props.img}/>
          </div>
        </div>
      </Carousel.Item>
    );
  }
}

export default carouselItem;
