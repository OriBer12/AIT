import React, { Component } from 'react';
import './Target.css';

import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';
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
      <div className="target-container">
        <h1>{this.props.data.daily_target}</h1>
        <p>{this.props.data.text}</p>
      </div>
      <div>
        <ProgressBar className="target-progress">
          <ProgressBar variant="success" now={(this.props.data.mtd/this.props.data.target)*100} key={1} />
          <ProgressBar variant="danger" now={100 -(this.props.data.mtd/this.props.data.target)*100} key={3} />
        </ProgressBar>
      </div>
      </Card>
      </Col>
    );
  }
}

export default Target;
