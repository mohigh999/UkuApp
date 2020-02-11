import React, { Component } from 'react';
import './card.css';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';

export default class CardUku extends Component {

  constructor(props){
    super(props)
    this.state = {
      on: false,
      detailin: false
    }
  }

  fadeLabel = (delay, el) => {
    el.style.opacity = "0"
    setTimeout(() => {
      el.style.opacity = "1" 
    }, delay);
  }

  handleClick = (e) =>{

    let label = e.currentTarget.children[0]
    this.fadeLabel(200, label)
    this.setState(state => ({
      detailin : !state.detailin
    }));
 
  }
  render() {
    return (
      <Grid item xs={12} >
        <Card className="card">
          <CardContent className="card-top"> 
            <Grid justify="center" container spacing={0}>
              <Grid item xs={9}>
                <Typography gutterBottom variant="h4" component="h2" className="card-title">{this.props.data.titre}</Typography>
              </Grid>
              <Grid item xs={3}>
                <IconButton size="medium" className={this.state.detailin ? "zelda-detail btn-primary btn-active" : "zelda-detail btn-primary btn-off"} onClick={this.handleClick} children={this.state.detailin ? <ExpandMoreIcon/> : <ExpandLessIcon/>}></IconButton>
              </Grid>
            </Grid>
            <Grid container alignItems="flex-end" spacing={0} className={this.state.detailin ? "detail-box detail-in" : "detail-box detail-out"}>
              <Grid item xs={6}>
                <Typography  gutterBottom variant="h5" component="h3">{this.props.data.tempo+" Bpm"}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography  gutterBottom variant="h5" component="h3">{this.props.data.tonalite}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Button startIcon={<RemoveRedEyeIcon/>}className="btn-secondary" href={this.props.data.lien_partition}>the tab</Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    )
  }
}
