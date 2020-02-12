import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import './accordeur.css';
import * as ml5 from 'ml5'

export default class Accordeur extends Component {

  componentDidMount(){
    console.log(ml5.version)
  }
  render() {
    return (
      <div id="accordeur" className="view view-out">
        Accordeur
        <Card className="test"></Card>
      </div>
    )
  }
}
