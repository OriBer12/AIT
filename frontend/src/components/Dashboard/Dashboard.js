import React, { Component } from 'react';
import './Dashboard.css';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card';

import Target from '../Target/Target';
import Carousel from '../carousel/carousel';

class Dashboard extends Component {
   constructor(props){
     super(props);
     this.state = {};
     this.targets = [{"type":"accesories","daily_target":1006,"mtd":"9785","target":12000},{"type":"Business customers","daily_target":1,"mtd":"5","target":11},{"type":"Business customers","daily_target":1,"mtd":"5","target":11}];
   }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return(
      <div>
          <Card className="dashboard-card">
            <Card.Title className="dashboard-card-title">Daily Targets</Card.Title>
            <Container className="Container">
              <Row className="row">
                {this.targets.map((value, index) => {
                  return <Target key={index} data={value} className="Target"></Target>
                })}
              </Row>
            </Container>
            <Card.Footer className="dashboard-card-footer">
              <p className="dashboard-card-footer-header">show more</p>
            </Card.Footer>
          </Card>
          <Card className="dashboard-card">
            <Card.Title className="dashboard-card-title">Daily Offers</Card.Title>
            <Container className="Container">
              <Row className="row">
                <Carousel/>
              </Row>
            </Container>
            <Card.Footer className="dashboard-card-footer">
              <p className="dashboard-card-footer-header">show more</p>
            </Card.Footer>

          </Card>

      </div>
  )
  }
}

export default Dashboard;
