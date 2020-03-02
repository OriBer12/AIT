import React, { Component } from 'react';
import './peers.css';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';


import Target from '../../components/Target';
import Carousel from '../../components/carousel';
import Performance from '../../components/performance';
import Panel from '../../components/panel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class peers extends Component {
   constructor(props){
     super(props);
     this.state = {};

     this.overall = [
       {index: "1", profile: "profile1.jfif",name: "Alexa Sandu","target":"89%"},
       {index: "2", profile: "profile2.jpg",name: "Ionus Giurescu","target":"84%"},
       {index: "3", profile: "profile4.png",name: "You","target":"83%"},
       {index: "4", profile: "profile3.jpg",name: "Simion Apostol","target":"79%"},
       {index: "5", profile: "profile7.jpg",name: "Vladimir Otvos","target":"72%"}
     ];

     this.devices = [
       {index: "1", profile: "profile1.jfif",name: "Alexa Sandu","target":"89%"},
       {index: "2", profile: "profile2.jpg",name: "Ionus Giurescu","target":"84%"},
       {index: "3", profile: "profile4.png",name: "You","target":"83%"},
       {index: "4", profile: "profile3.jpg",name: "Simion Apostol","target":"79%"},
       {index: "5", profile: "profile7.jpg",name: "Vladimir Otvos","target":"72%"}
     ];

     this.accessories = [
       {index: "1", profile: "profile1.jfif",name: "Alexa Sandu","target":"89%"},
       {index: "2", profile: "profile2.jpg",name: "Ionus Giurescu","target":"84%"},
       {index: "3", profile: "profile4.png",name: "You","target":"83%"},
       {index: "4", profile: "profile3.jpg",name: "Simion Apostol","target":"79%"},
       {index: "5", profile: "profile7.jpg",name: "Vladimir Otvos","target":"72%"}
     ];

     this.upsell = [
       {index: "1", profile: "profile1.jfif",name: "Alexa Sandu","target":"89%"},
       {index: "2", profile: "profile2.jpg",name: "Ionus Giurescu","target":"84%"},
       {index: "3", profile: "profile4.png",name: "You","target":"83%"},
       {index: "4", profile: "profile3.jpg",name: "Simion Apostol","target":"79%"},
       {index: "5", profile: "profile7.jpg",name: "Vladimir Otvos","target":"72%"}
     ];

     this.broadband = [
       {index: "1", profile: "profile1.jfif",name: "Alexa Sandu","target":"89%"},
       {index: "2", profile: "profile2.jpg",name: "Ionus Giurescu","target":"84%"},
       {index: "3", profile: "profile4.png",name: "You","target":"83%"},
       {index: "4", profile: "profile3.jpg",name: "Simion Apostol","target":"79%"},
       {index: "5", profile: "profile7.jpg",name: "Vladimir Otvos","target":"72%"}
     ];

     this.prepaid = [
       {index: "1", profile: "profile1.jfif",name: "Alexa Sandu","target":"89%"},
       {index: "2", profile: "profile2.jpg",name: "Ionus Giurescu","target":"84%"},
       {index: "3", profile: "profile4.png",name: "You","target":"83%"},
       {index: "4", profile: "profile3.jpg",name: "Simion Apostol","target":"79%"},
       {index: "5", profile: "profile7.jpg",name: "Vladimir Otvos","target":"72%"}
     ];

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

          <Col lg="12" sm="12">

      <Container>
        <Row>
          <Col lg="4" sm="12">
            <Card className="dashboard-card">
            <Card.Title className="dashboard-card-title">Overall</Card.Title>
            {
              this.overall.map((value,index)=>{
                return <div className="peers-leaderboard-item">
                  <p>{value.index}</p>
                  <img src={process.env.PUBLIC_URL + "/" + value.profile}
                    width="25"
                    height="25"
                  />
                  <p>{value.name}</p>
                  <p>{value.target}</p>
                </div>

              })
            }
            <Container className="Container">
            </Container>
            <Card.Footer className="dashboard-card-footer">
              <p className="dashboard-card-footer-header">show more</p>
            </Card.Footer>
            </Card>
          </Col>
          <Col lg="4" sm="12">
                <Card className="dashboard-card">
                <Card.Title className="dashboard-card-title">Devices</Card.Title>
                {
                  this.devices.map((value,index)=>{
                    return <div className="peers-leaderboard-item">
                      <p>{value.index}</p>
                      <img src={process.env.PUBLIC_URL + "/" + value.profile}
                        width="25"
                        height="25"
                      />
                      <p>{value.name}</p>
                      <p>{value.target}</p>
                    </div>

                  })
                }
                <Container className="Container">
                </Container>
                <Card.Footer className="dashboard-card-footer">
                  <p className="dashboard-card-footer-header">show more</p>
                </Card.Footer>
                </Card>
          </Col>
          <Col lg="4" sm="12">
                    <Card className="dashboard-card">
                    <Card.Title className="dashboard-card-title">Accessories</Card.Title>
                    {
                      this.accessories.map((value,index)=>{
                        return <div className="peers-leaderboard-item">
                          <p>{value.index}</p>
                          <img src={process.env.PUBLIC_URL + "/" + value.profile}
                            width="25"
                            height="25"
                          />
                          <p>{value.name}</p>
                          <p>{value.target}</p>
                        </div>

                      })
                    }
                    <Container className="Container">
                    </Container>
                    <Card.Footer className="dashboard-card-footer">
                      <p className="dashboard-card-footer-header">show more</p>
                    </Card.Footer>
                    </Card>
          </Col>
        </Row>
        <Row>
        <Col lg="4" sm="12">
          <Card className="dashboard-card">
          <Card.Title className="dashboard-card-title">Upsell</Card.Title>
          {
            this.upsell.map((value,index)=>{
              return <div className="peers-leaderboard-item">
                <p>{value.index}</p>
                <img src={process.env.PUBLIC_URL + "/" + value.profile}
                  width="25"
                  height="25"
                />
                <p>{value.name}</p>
                <p>{value.target}</p>
              </div>

            })
          }
          <Container className="Container">

          </Container>
          <Card.Footer className="dashboard-card-footer">
            <p className="dashboard-card-footer-header">show more</p>
          </Card.Footer>
          </Card>
        </Col>
        <Col lg="4" sm="12">
              <Card className="dashboard-card">
              <Card.Title className="dashboard-card-title">Broadband</Card.Title>
              {
                this.broadband.map((value,index)=>{
                  return <div className="peers-leaderboard-item">
                    <p>{value.index}</p>
                    <img src={process.env.PUBLIC_URL + "/" + value.profile}
                      width="25"
                      height="25"
                    />
                    <p>{value.name}</p>
                    <p>{value.target}</p>
                  </div>

                })
              }

              <Card.Footer className="dashboard-card-footer">
                <p className="dashboard-card-footer-header">show more</p>
              </Card.Footer>
              </Card>
        </Col>
        <Col lg="4" sm="12">
                  <Card className="dashboard-card">
                  <Card.Title className="dashboard-card-title">Prepaid</Card.Title>
                  {
                    this.prepaid.map((value,index)=>{
                      return <div className="peers-leaderboard-item">
                        <p>{value.index}</p>
                        <img src={process.env.PUBLIC_URL + "/" + value.profile}
                          width="25"
                          height="25"
                        />
                        <p>{value.name}</p>
                        <p>{value.target}</p>
                      </div>

                    })
                  }
                  <Card.Footer className="dashboard-card-footer">
                    <p className="dashboard-card-footer-header">show more</p>
                  </Card.Footer>
                  </Card>
        </Col>

        </Row>
      </Container>
      </Col>


    </Row>
  </Container>

    );
  }
}

export default peers;
