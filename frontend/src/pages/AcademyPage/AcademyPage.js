import React, { Component } from 'react';
import './AcademyPage.css';
import VideoCategory from '../../components/academy/VideoCategory';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class AcademyPage extends Component {
   constructor(props){
     super(props);
     this.state = {};
     this.data = [
       {category:"How to sell Samsung S20",movies: [
         {movie_id:"jgy1HDi-uhE",caption:"Samsung S20 Review"},
         {movie_id:"KnVTKbbEsOs",caption:"First 20 things to do"},
         {movie_id:"IbXzNQ4My30",caption:"10 Tips & Tricks"},
         {movie_id:"Y8qxDnve_08",caption:"Samsung S20 VS. iPhone 11 Pro"}]},
         {category:"How to close a deal",movies: [
           {movie_id:"gDS0C-TN8bQ",caption:"3 steps to close a deal"},
           {movie_id:"zDEcdnVx6f0",caption:"How to close any sale"},
           {movie_id:"4JPD-HoMOFw",caption:"Clients say I'll get to you"},
           {movie_id:"UCo3Z-y72Kg",caption:"How to sell a product"}
           ]}
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
      <Container>
        <Row>
        {
          this.data.map((value,index)=>{
            return <VideoCategory key={index} data={value}></VideoCategory>
          })
        }

        </Row>
      </Container>

    );
  }
}

export default AcademyPage;
