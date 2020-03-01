import React, { Component } from 'react';
import './Dashboard.css';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';


import Target from '../../components/Target';
import Carousel from '../../components/carousel';
import Performance from '../../components/performance';
import Panel from '../../components/panel';

class Dashboard extends Component {
   constructor(props){
     super(props);
     this.state = {};
     this.targets = [

       {"type":"accesories","daily_target":200,"text":"Devices to sell","mtd":"200","target":800},
       {"type":"Business customers","daily_target":10,"text":"New Consumers to Onboard","mtd":"10","target":50},
       {"type":"Business customers","daily_target":600,"text":"Accessories to sell ","mtd":"600","target":1250},
       {"type":"Business customers","daily_target":25,"text":"New Business Customers to Onboard","mtd":"25","target":50},
     ];

     this.leaderbord = [
         {"title":"LeaderBoard","board":[{"name":"Edward Florescu","score":"300","profile_img":"profile1.jfif"},
         {"name":"Alina Cebanu","score":"289","profile_img":"profile2.JPG"},
         {"name":"You","score":"250","profile_img":"profile3.jpg"}]}
     ]
   }

  render() {
    return(
      <Container>
        <Row>

          <Col lg="9" sm="12">

      <Container>
        <Row>
            <Card className="dashboard-card">
            <Card.Title className="dashboard-card-title">My Daily Targets </Card.Title>

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
            <Card.Title className="dashboard-card-title">Deal of the Day</Card.Title>
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
      </Col>

      <Col lg="3" sm="0" className="no-padding d-none d-lg-block"><Panel data={this.leaderbord}/></Col>
    </Row>
  </Container>

  )
  }
}

export default Dashboard;
