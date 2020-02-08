import React, { Component } from 'react';
import './card-list.css';
import Card from './card/card';

export default class CardList extends Component {
  static defaultProps =  
  {
    // url: "https://www.ukuapi.pierre-monier.com/src/select.php"
    url : "./FakeApi/card-examples.json"
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
        console.log("##########")
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
    <Card key={card.id} data={card}>{card.titre}</Card>
  );
    return cards;
  }

  render() {

    return (
      <div className="card-list" data-testid="cardlist" data-testnbr={ this.state.on ? this.state.nbr : 0 }>
        { this.state.on ? this.state.cards : this.state.loader }
      </div>
    )

  }
}
