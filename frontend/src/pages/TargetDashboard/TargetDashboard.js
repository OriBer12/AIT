import React, { Component } from 'react';
import './TargetDashboard.css';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';

import Carousel from '../../components/carousel';
import Panel from '../../components/panel';
import Graph from '../../components/Graph';

const line = [
  ["Date", "Sales"],
  ["1.2", 20],
  ["2.2", 18],
  ["3.2", 21],
  ["4.2", 22],
  ["5.2", 20],
  ["6.2", 23],
  ["7.2", 24],
  ["8.2", 25],
  ["9.2", 26],
  ["10.2", 27],
  ["11.2", 28],
  ["12.2", 29],
  ["13.2", 23],
  ["14.2", 18],
  ["15.2", 19],
  ["16.2", 18]

];
const bar=[
    ["Device","Me","Avg. Group"],
    ['Upsell', 20, 30],
    ['Downsell', 30, 28],
    ['Renewals', 70, 60]
  ];
  
class TargetDashboard extends Component {
   constructor(props){
     super(props);
     this.leaderbord = [
         {"title":"Devices Leaderboard","board":[{"name":"Alexandra Frunza","score":"1250","profile_img":"profile1.jfif"},
         {"name":"Alina Cebanu","score":"1189","profile_img":"profile2.JPG"},
         {"name":"Romina Sandu","score":"1170","profile_img":"profile3.jpg"}]}
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
          <Col lg="9" sm="12">
        <Container>
          <Row>
              <Card className="dashboard-card">
              <Card.Title className="dashboard-card-title">My Monthly Performance</Card.Title>
              <Container className="Container">
                <Graph type="LineChart" width="100%" height="320px" data={line}/>
              </Container>
              <Card.Footer className="dashboard-card-footer">
                <p className="dashboard-card-footer-header">show more</p>
              </Card.Footer>
              </Card>
          </Row>
          <Row>
            <Col lg="6" className="inner-col-left">
            <Card className="dashboard-card">
              <Card.Title className="dashboard-card-title">Deal of the day</Card.Title>
              <Container className="Container">
                <Row className="row">
                  <Carousel/>
                </Row>
              </Container>
              <Card.Footer className="dashboard-card-footer">
                <p className="dashboard-card-footer-header">show more</p>
              </Card.Footer>

            </Card>
            </Col>
            <Col lg="6" className="inner-col-right">
            <Card className="dashboard-card">
              <Card.Title className="dashboard-card-title">My Performance</Card.Title>
              <Container className="Container">
                <Row className="row" >
                  <Graph type="Bar" width="100%" height="320" data={bar}/>
                </Row>
              </Container>
              <Card.Footer className="dashboard-card-footer">
                <p className="dashboard-card-footer-header">show more</p>
              </Card.Footer>

            </Card>
            </Col>
          </Row>
        </Container>
        </Col>

        <Col lg="3" sm="0" className="no-padding d-none d-lg-block"><Panel data={this.leaderbord}/></Col>
      </Row>
    </Container>

    );
  }
}

export default TargetDashboard;
