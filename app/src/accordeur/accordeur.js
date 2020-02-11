import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import './accordeur.css';

export default class Accordeur extends Component {
  render() {
    return (
      <div id="accordeur" className="view view-out">
        Accordeur
        <Card className="test"></Card>
      </div>
    )
  }
}
