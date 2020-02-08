import React, { Component } from 'react';
import './card.css';

export default class card extends Component {

  constructor(props){
    super(props)
    this.state = {
      on: false,
      detailin: false
    }
  }

  handleClick = () =>{
    this.setState(state => ({
      detailin : !state.detailin
    }));
  }
  render() {
    return (
      <div className="card">
        <div className="card-top"> 
          <h3 className="card-title">{this.props.data.titre}</h3>
          {/* zelda-detail btn-off */}
          <button className={this.state.detailin ? "zelda-detail btn-active" : "zelda-detail btn-off"} onClick={this.handleClick}>{this.state.detailin ? "-" : "+"}</button>
          <div className={this.state.detailin ? "detail-box detail-in" : "detail-box detail-out"}> 
            <h5>{this.props.data.tempo}</h5>
            <h5>{this.props.data.tonalite}</h5>
            <button>Play it</button>
          </div>
        </div>
      </div>
    )
  }
}
