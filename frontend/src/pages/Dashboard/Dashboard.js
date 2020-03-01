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

       {"type":"accesories","daily_target":200,"text":"Devices to sell","mtd":"200","target":800,"header":"Device","icon":"mobile"},
       {"type":"Business customers","daily_target":10,"text":"New Consumers to Onboard","mtd":"10","target":50,"header":"Consumers","icon":"user"},
       {"type":"Business customers","daily_target":600,"text":"Accessories to sell ","mtd":"600","target":1250,"header":"Accessories","icon":"keyboard"},
       {"type":"Business customers","daily_target":25,"text":"New Business Customers to Onboard","mtd":"25","target":50,"header":"Business","icon":"briefcase"},
     ];

     this.leaderbord = [
         {"title":"Leaderboard","board":[{"name":"Edward Florescu","score":"300","profile_img":"profile1.jfif"},
         {"name":"Alina Cebanu","score":"289","profile_img":"profile2.JPG"},
         {"name":"You","score":"250","profile_img":"profile3.jpg"}]}
     ]

     this.performance = [
       {"title":"Voice","mtd":10, "RR": 50, "target":40,"caption": 200},
       {"title":"Data","mtd":30, "RR": 60, "target":10,"caption": 150},
       {"title":"Accessories","mtd":50, "RR": 20, "target":30,"caption": 800}
     ]

     this.offers = [
       {"img": "s10_200_200.png","name": "New Samsung S20 Ultra","offer": "Pre order "},
       {"img": "airpods.jpg","name": "Have you offered AirPods today?","offer": "They’re at 10% Discount"}
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
                <Carousel data={this.offers}/>
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
                <Performance data={this.performance}/>
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
