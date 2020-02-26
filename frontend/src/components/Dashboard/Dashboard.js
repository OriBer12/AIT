import React, { Component } from 'react';
import './Dashboard.css';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';

import Target from '../Target/Target';
import Carousel from '../carousel/carousel';
import Performance from '../performance/performance';

class Dashboard extends Component {
   constructor(props){
     super(props);
     this.state = {};
     this.targets = [{"type":"accesories","daily_target":1006,"mtd":"9785","target":12000},{"type":"Business customers","daily_target":1,"mtd":"5","target":11},{"type":"Business customers","daily_target":1,"mtd":"5","target":11}];
   }

  render() {
    return(
      <Container>
        <Row>
            <Card className="dashboard-card">
            <Card.Title className="dashboard-card-title">My daily targets</Card.Title>
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
              <Row className="row">
                <Performance/>
              </Row>
            </Container>
            <Card.Footer className="dashboard-card-footer">
              <p className="dashboard-card-footer-header">show more</p>
            </Card.Footer>

          </Card>
          </Col>
        </Row>
      </Container>
  )
  }
}

export default Dashboard;
