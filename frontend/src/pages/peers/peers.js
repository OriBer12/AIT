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
       {index: "1", profile: "profile1.jfif",name: "Daniela Sandu","target":"5500"},
       {index: "2", profile: "profile2.jpg",name: "Ionus Giurescu","target":"4875"},
       {index: "3", profile: "profile4.png",name: "You","target":"4000"},
       {index: "4", profile: "profile3.jpg",name: "Simion Apostol","target":"3650"},
       {index: "5", profile: "profile7.jpg",name: "Vladimir Otvos","target":"3000"}
     ];

     this.devices = [
       {index: "1", profile: "profile1.jfif",name: "Daniela Sandu","target":"1850"},
       {index: "2", profile: "profile2.jpg",name: "Ionus Giurescu","target":"1600"},
       {index: "3", profile: "profile4.png",name: "You","target":"1400"},
       {index: "4", profile: "profile3.jpg",name: "Simion Apostol","target":"1100"},
       {index: "5", profile: "profile7.jpg",name: "Vladimir Otvos","target":"900"}
     ];

     this.accessories = [
       {index: "1", profile: "profile1.jfif",name: "Daniela Sandu","target":"1500"},
       {index: "2", profile: "profile2.jpg",name: "Ionus Giurescu","target":"1200"},
       {index: "3", profile: "profile4.png",name: "You","target":"1100"},
       {index: "4", profile: "profile3.jpg",name: "Simion Apostol","target":"900"},
       {index: "5", profile: "profile7.jpg",name: "Vladimir Otvos","target":"650"}
     ];

     this.upsell = [
       {index: "1", profile: "profile1.jfif",name: "Daniela Sandu","target":"1750"},
       {index: "2", profile: "profile2.jpg",name: "Ionus Giurescu","target":"1600"},
       {index: "3", profile: "profile4.png",name: "You","target":"1100"},
       {index: "4", profile: "profile3.jpg",name: "Simion Apostol","target":"850"},
       {index: "5", profile: "profile7.jpg",name: "Vladimir Otvos","target":"500"}
     ];

     this.broadband = [
       {index: "1", profile: "profile1.jfif",name: "Daniela Sandu","target":"1900"},
       {index: "2", profile: "profile2.jpg",name: "Ionus Giurescu","target":"1800"},
       {index: "3", profile: "profile4.png",name: "You","target":"1200"},
       {index: "4", profile: "profile3.jpg",name: "Simion Apostol","target":"800"},
       {index: "5", profile: "profile7.jpg",name: "Vladimir Otvos","target":"500"}
     ];

     this.prepaid = [
       {index: "1", profile: "profile1.jfif",name: "Daniela Sandu","target":"2400"},
       {index: "2", profile: "profile2.jpg",name: "Ionus Giurescu","target":"2000"},
       {index: "3", profile: "profile4.png",name: "You","target":"1900"},
       {index: "4", profile: "profile3.jpg",name: "Simion Apostol","target":"1800"},
       {index: "5", profile: "profile7.jpg",name: "Vladimir Otvos","target":"1700"}
     ];

   }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}
  color(index){
    let ret;
    switch(index){
      case 1:
        ret = 'trophy-icon-silver';
      break;
      case 2:
        ret = 'trophy-icon-bronze';
      break;
      default:
        ret = 'trophy-icon';

    }
    return ret;
  }
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
                  {
                    (index >=3) ? <p>{value.index}</p>: <FontAwesomeIcon
                    className={
                    this.color(index)  + ' trophy-icon icon '
                    }

                    icon="trophy" />

                  }
                  <img src={process.env.PUBLIC_URL + "/" + value.profile}
                    width="25"
                    height="25"
                  />
                  <p>{value.name}</p>
                  <div className="points">
                    <p className="point">{value.target}</p>
                    <p className="point-header">Points</p>
                  </div>

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
                    {
                      (index >=3) ? <p>{value.index}</p>: <FontAwesomeIcon
                      className={
                      this.color(index)  + ' trophy-icon icon '
                      }

                      icon="trophy" />

                    }
                      <img src={process.env.PUBLIC_URL + "/" + value.profile}
                        width="25"
                        height="25"
                      />
                      <p>{value.name}</p>
                      <div className="points">
                        <p className="point">{value.target}</p>
                        <p className="point-header">Points</p>
                      </div>

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
                        {
                          (index >=3) ? <p>{value.index}</p>: <FontAwesomeIcon
                          className={
                          this.color(index)  + ' trophy-icon icon '
                          }

                          icon="trophy" />

                        }

                          <img src={process.env.PUBLIC_URL + "/" + value.profile}
                            width="25"
                            height="25"
                          />
                          <p>{value.name}</p>
                          <div className="points">
                            <p className="point">{value.target}</p>
                            <p className="point-header">Points</p>
                          </div>

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
              {
                (index >=3) ? <p>{value.index}</p>: <FontAwesomeIcon
                className={
                this.color(index)  + ' trophy-icon icon '
                }

                icon="trophy" />

              }

                <img src={process.env.PUBLIC_URL + "/" + value.profile}
                  width="25"
                  height="25"
                />
                <p>{value.name}</p>
                <div className="points">
                  <p className="point">{value.target}</p>
                  <p className="point-header">Points</p>
                </div>

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
                  {
                    (index >=3) ? <p>{value.index}</p>: <FontAwesomeIcon
                    className={
                    this.color(index)  + ' trophy-icon icon '
                    }

                    icon="trophy" />

                  }

                    <img src={process.env.PUBLIC_URL + "/" + value.profile}
                      width="25"
                      height="25"
                    />
                    <p>{value.name}</p>
                    <div className="points">
                      <p className="point">{value.target}</p>
                      <p className="point-header">Points</p>
                    </div>

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
                      {
                        (index >=3) ? <p>{value.index}</p>: <FontAwesomeIcon
                        className={
                        this.color(index)  + ' trophy-icon icon '
                        }

                        icon="trophy" />

                      }

                        <img src={process.env.PUBLIC_URL + "/" + value.profile}
                          width="25"
                          height="25"
                        />
                        <p>{value.name}</p>
                        <div className="points">
                          <p className="point">{value.target}</p>
                          <p className="point-header">Points</p>
                        </div>
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
