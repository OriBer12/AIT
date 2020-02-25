import React, { Component } from 'react';
import './boardItem.css';

class boardItem extends Component {
   constructor(props){
     super(props);
    // this.state = {};
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
      <div className="boardItem">
        <div className="item-txt">
        <img className="item-img" src={process.env.PUBLIC_URL + "/" + this.props.img}/>
        </div>
        <div className="item-txt">
          <h1 className="board-item-name">{this.props.name}</h1>
          <h1 className="board-item-status">{this.props.score} points</h1>
        </div>
      </div>
    );
  }
}
export default boardItem;
