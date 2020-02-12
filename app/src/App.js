import React, { Component } from 'react';
import './App.css';
import Hammer from 'hammerjs';
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
    this.addHammer = this.addHammer.bind(this)
    this.state = {
      current_view: 0,
      tab_view: ["#card-list", "#accordeur", "#metronome"],
      navon: [true,false,false]
    }

  }
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// ComponentDidMount
  componentDidMount() {

    const app = document.querySelector(".App")
    this.addHammer(app)
    this.setState({ 
      view: document.querySelectorAll(".view"),
      nbr_view: app.childNodes.length - 2
    });
    this.viewOutDisplayer(this.state.current)

  }
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// AddHamer
  addHammer(app) {
    
    this.hammer = new Hammer(app) 


    this.hammer.on("panleft", (e) => {
      console.log(this.state.current_view, (this.state.tab_view.length -1))
      if(this.state.current_view === (this.state.tab_view.length -1)){
        console.log(e.deltaX, (window.innerWidth/2))
        if(Math.abs(e.deltaX) < (window.innerWidth/2)){
          document.querySelector("#allview").style.transform = "translateX("+e.deltaX+"px)";
        }    
      }else{
        document.querySelector("#allview").style.transform = "translateX("+e.deltaX+"px)";
      }
    })


    this.hammer.on("panend", (e) => {
      console.log(e)
      let current = "#"+this.state.view[this.state.current_view].getAttribute("id")
      // °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
      // Droite
      console.log(Math.abs(e.deltaX), )
      if(Math.abs(e.deltaX) > (window.innerWidth/2) && this.state.current_view < (this.state.tab_view.length -1) && e.deltaX < 0){
        
        let target = "#"+this.state.view[this.state.current_view+1].getAttribute("id")
        this.nav(target)

      }
      document.querySelector("#allview").style.transform = "translateX(0px)";
    })


    
    this.hammer.on("swiperight", () => {
      if(this.state.current_view > 0){
        this.setState( state => {
          // eslint-disable-next-line
          current_view: state.current_view--
        })
        let target = "#"+this.state.view[this.state.current_view].getAttribute("id")
        this.nav(target)
      }
    })
    this.hammer.on("swipeleft", () => {
      if(this.state.current_view < this.state.nbr_view){
        this.setState( state => {
          // eslint-disable-next-line
          current_view: state.current_view++
        })
        let target = "#"+this.state.view[this.state.current_view].getAttribute("id")
        this.nav(target)
      }
    })

  }
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// Nav
  nav(target) {

    let active_nav_item = this.state.tab_view.indexOf(target)

    this.state.view.forEach(el => {
      el.classList.remove("view-in")
      el.classList.add("view-out")
    })
    this.setState({
      current_view: this.state.tab_view.indexOf(target)
    })
    document.querySelector(target).classList.remove("view-out")
    document.querySelector(target).classList.add("view-in")
    document.querySelector(target).style.transform = "translateX(0px)";
    this.viewOutDisplayer(this.state.tab_view.indexOf(target))
    this.changeBottomNaviationIndice(active_nav_item)

  } 
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// viewOutDisplayer
  viewOutDisplayer(target) {

    let viewout = document.querySelectorAll(".view-out")
    switch(target){
      case 0:
        viewout.forEach(el => {
          el.style.transform = "translateX("+(window.innerWidth)+"px)";
        })
        break;
      case this.state.tab_view.length - 1:
        viewout.forEach(el => {
          el.style.transform = "translateX("+(-window.innerWidth)+"px)";
        })
        break;
      default:
        viewout.forEach((el, i) => {
          if(i < target){
            el.style.transform = "translateX("+(-window.innerWidth)+"px)";
          }else{
            el.style.transform = "translateX("+(window.innerWidth)+"px)";
          }
        })
        break;
    }

  }
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// changeBottomNaviationIndice
  changeBottomNaviationIndice(navindice){

    let newtab = ['bru']
    this.state.navon.forEach((el, i) => {
      if(i !== navindice){
        newtab[i] = false
      }else{
        newtab[i] = true
      }
      // if()
    });
    this.setState({navon: newtab})


  }
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// Render, old, false
  render() {

    return (
      <div className="App" data-testid="app">
        <div id="allview">
          <CardList data-nbr="0">></CardList>
          <Accordeur data-nbr="1">></Accordeur>
          <Metronome data-nbr="2">></Metronome>
        </div>
        <AppNavigation navon={this.state.navon} func={this.nav}></AppNavigation>
      </div>
    );

  }
}
