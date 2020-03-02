import React, { Component } from 'react';
import { useState } from 'react';
import './carousel.css';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';


function ControlledCarousel(props) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
    {props.data.map((value, index) => {
    return (
      <Carousel.Item key={index}>
        <div className="carouselItem">
          <div className="crousel-item-content">
            <div>
            <span className="notify-badge">Special Offer</span>
            <img className="crousel-img" src={process.env.PUBLIC_URL + "/" + value.img}/>
            </div>
            <div>
            <p className="crousel-offer-h1">{value.name}</p>
            <p className="crousel-offer-h2">{value.offer}</p>
            </div>
          </div>
        </div>
      </Carousel.Item>
    )
    })}
    </Carousel>
  );
}


class carousel extends Component {
   constructor(props){
     super(props);
     this.state = {};
     this.data =[
       {"img": "s10_200_200.png","name": "New Samsung S20","offer": "Get your customers to pre order!"},
       {"img": "airpods.jpg","name": "Have you offered AirPods today?","offer": "They’re at 10% Discount"}
     ]
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
        <ControlledCarousel data={this.data}/>
    );
  }
}

export default carousel;
