import React, { Component } from 'react';
import './card.css';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';

export default class CardUku extends Component {

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
      <Grid className="card" item xs={12} >
        <Card>
          <CardContent className="card-top"> 
            <Grid container spacing={0}>
              <Grid item xs={9}>
                <Typography gutterBottom variant="h3" component="h2" className="card-title">{this.props.data.titre}</Typography>
              </Grid>
              <Grid item xs={3}>
                <Button variant="contained" color="primary" className={this.state.detailin ? "zelda-detail btn-active" : "zelda-detail btn-off"} onClick={this.handleClick}>{this.state.detailin ? "-" : "+"}</Button>
              </Grid>
            </Grid>
            <CardContent  className={this.state.detailin ? "detail-box detail-in" : "detail-box detail-out"}> 
              <Grid container alignItems="center" spacing={0}>
                <Grid item xs={6}>
                  <Typography  gutterBottom variant="h4" component="h3">{this.props.data.tempo+" Bpm"}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography  gutterBottom variant="h4" component="h3">{this.props.data.tonalite}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" color="secondary" href={this.props.data.lien_partition}>Get the tab</Button>
                </Grid>
              </Grid>
            </CardContent>
  
          </CardContent>
          
        </Card>
      </Grid>
    )
  }
}
