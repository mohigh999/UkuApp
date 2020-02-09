import React, { Component } from 'react';
import './card-list.css';
import CardUku from './card/card';
import { Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';

export default class CardList extends Component {
  static defaultProps =  
  {
    url: "https://www.ukuapi.pierre-monier.com/src/select.php"
  }

  constructor(props){
    super(props)
    this.data = '';
    this.state = {
      on: false,
      nbr: 0,
      loader: "Wait..."
    }
  }
    

  componentDidMount() {

    fetch(this.props.url)
      .then( res => {
        return res.json()
      })
      .then( res => {
        const data = res
        this.setState({ 
          on: true,
          nbr: data.length,
          data: data,
          cards: this.createCards(data)
        });
        
      })
      .catch(error => {
        alert(error)
      })
  }

  createCards(data) {
    const cards = data.map((card, key) =>
    <CardUku key={card.id} data={card}>{card.titre}</CardUku>
  );
    return cards;
  }

  render() {

    return (
      <div id="card-list" className="view view-in" data-testid="cardlist" data-testnbr={ this.state.on ? this.state.nbr : 0 }>
        <Container maxWidth="lg">
          <Grid container alignItems="center" spacing={6}>
          { this.state.on ? this.state.cards : this.state.loader }
          </Grid>
        </Container>
      </div>
    )
  }
}
