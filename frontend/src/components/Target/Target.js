import React, { Component } from 'react';
import './Target.css';

import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Redirect } from 'react-router';

class Target extends Component {
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

  handleOnClick = () => {
    // some action...
    // then redirect
    this.setState({redirect: true});
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/dashboard/target" />;
    }

    return (
      <Col className="col" sm="12" lg="6" >
      <Card className="Target" onClick={this.handleOnClick} body>
      <Card.Header className="my-card-header card-header">
        <FontAwesomeIcon className="target-icon icon" icon={this.props.data.icon} />
        <p className="target-header-text">{this.props.data.header}</p>
      </Card.Header>
      <div className="target-container">
        <div className="card-header-container">
          <h1>{this.props.data.daily_target}</h1>
          <p>{this.props.data.text}</p>
        </div>
      </div>
      <div className="card-footer-container">
        <ProgressBar className="target-progress">
          <ProgressBar variant="success" now={(this.props.data.mtd/this.props.data.target)*100} key={1} />
          <ProgressBar variant="danger" now={100 -(this.props.data.mtd/this.props.data.target)*100} key={3} />
        </ProgressBar>
        <div className="card-footer-text">
          <p>out of {this.props.data.target}</p>
        </div>
      </div>
      </Card>
      </Col>
    );
  }
}

export default Target;
