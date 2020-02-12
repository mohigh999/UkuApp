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
    const appview = document.querySelector("#allview")
    this.addHammer(app)
    this.setState({ 
      view: document.querySelectorAll(".view"),
      nbr_view: appview.childNodes.length
    });
    this.viewOutDisplayer(this.state.current_view)

  }
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// AddHamer
  addHammer(app) {
    
    this.hammer = new Hammer(app) 
    this.hammer.on("panleft", (e) => {
      let tsl_current = (-this.state.current_view * window.innerWidth) + e.deltaX
      if(this.state.current_view === (this.state.tab_view.length -1)){
        if(Math.abs(e.deltaX) < (window.innerWidth/2)){
          document.querySelector("#allview").classList.add("no-transi")
          document.querySelector("#allview").style.transform = "translateX("+tsl_current+"px)";
        }    
      }else{
        document.querySelector("#allview").classList.add("no-transi") 
        document.querySelector("#allview").style.transform = "translateX("+tsl_current+"px)";
      }
    })
    this.hammer.on("panright", (e) => {
      let tsl_current = (-this.state.current_view * window.innerWidth) + e.deltaX
      if(this.state.current_view === 0){
        if(Math.abs(e.deltaX) < (window.innerWidth/2)){
          document.querySelector("#allview").classList.add("no-transi")
          document.querySelector("#allview").style.transform = "translateX("+tsl_current+"px)";
        }    
      }else{
        document.querySelector("#allview").classList.add("no-transi")
        document.querySelector("#allview").style.transform = "translateX("+tsl_current+"px)";
      }
    })
    this.hammer.on("panend", (e) => {
      document.querySelector("#allview").classList.remove("no-transi")
      // °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
      // Droite
      if(Math.abs(e.deltaX) > (window.innerWidth/2) && this.state.current_view < (this.state.tab_view.length -1) && e.deltaX < 0){
        console.log("DROITE IF")
        let target = "#"+this.state.view[this.state.current_view+1].getAttribute("id")
        this.nav(target)

      }
      else if(this.state.current_view === (this.state.tab_view.length -1)){
        console.log("DROITE ELSE")
        document.querySelector("#allview").style.transform = "translateX("+(-this.state.current_view) * window.innerWidth+"px)";
      }else{
        // Milieu dir = droite
        document.querySelector("#allview").style.transform = "translateX("+(-this.state.current_view) * window.innerWidth+"px)";
      }
      // °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
      // Gauche
      if(Math.abs(e.deltaX) > (window.innerWidth/2) && this.state.current_view !== 0 && e.deltaX > 0){
        console.log("GAUCHE IF")
        let target = "#"+this.state.view[this.state.current_view-1].getAttribute("id")
        this.nav(target)
      } else if(this.state.current_view === 0){
        console.log("GAUCHE ELSE")
        document.querySelector("#allview").style.transform = "translateX(0px)";
      }else{
        // Milieu dir = gauche
        document.querySelector("#allview").style.transform = "translateX("+(-this.state.current_view) * window.innerWidth+"px)";
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
    document.querySelector("#allview").style.transform = "translateX("+ - (active_nav_item * window.innerWidth)+"px)";
    this.changeBottomNaviationIndice(active_nav_item)
    // this.viewOutDisplayer(this.state.tab_view.indexOf(target))

  } 
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// viewOutDisplayer
  viewOutDisplayer(target) {
    let viewout = document.querySelectorAll(".view-out")
    switch(target){
      case 0:
        viewout.forEach((el,i) => {
          el.style.transform = "translateX("+(window.innerWidth * (i+1))+"px)";
        })
        break;
      case this.state.tab_view.length - 1:
        let inver_indice = viewout.length
        viewout.forEach(el => {
          el.style.transform = "translateX("+(-window.innerWidth * inver_indice)+"px)";
          inver_indice--
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
