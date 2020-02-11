import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import './metronome.css';

export default class Metronome extends Component {
  render() {
    return (
      <div id="metronome" className="view view-out">
        Metronome
        <Card className="test"></Card>
      </div>
    )
  }
}
