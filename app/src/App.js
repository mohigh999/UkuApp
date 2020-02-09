import React, { Component } from 'react';
import './App.css';
// Component
import CardList from './card-list/card-list';
import Accordeur from './accordeur/accordeur';
import Metronome from './metronome/metronome';
import AppNavigation from './app-navigation/app-navigation';
// end of statement

export default class App extends Component {

  constructor() {
    super()
    this.nav = this.nav.bind(this)
  }

  componentDidMount() {

    this.setState({ 
      view: document.querySelectorAll(".view")
    });

  }
  nav(target) {

    this.state.view.forEach(el => {
      el.style.display = "none"
    })
    document.querySelector(target).style.display = "block"
    
  }

  render() {
    return (
      <div className="App">
        <CardList className="test">></CardList>
        <Accordeur className="test">></Accordeur>
        <Metronome className="test">></Metronome>
        <AppNavigation func={this.nav}></AppNavigation>
      </div>
    );
  }
}
