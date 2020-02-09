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
      el.classList.remove("view-in")
      el.classList.add("view-out")
    })
    document.querySelector(target).classList.remove("view-out")
    document.querySelector(target).classList.add("view-in")
    
  }

  render() {
    return (
      <div className="App" data-testid="app">
        <CardList>></CardList>
        <Accordeur>></Accordeur>
        <Metronome>></Metronome>
        <AppNavigation func={this.nav}></AppNavigation>
      </div>
    );
  }
}
