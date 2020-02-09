import React, { Component } from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

export default class AppNavigation extends Component {


  render() {
    // const [value, setValue] = React.useState(0);
      return (
      <div className="appnavigation">
        <BottomNavigation
          // value={value}
          // onChange={(event, newValue) => {
          //   setValue(newValue);
          // }}
          showLabels
        >
          <BottomNavigationAction onClick={() => { this.props.func(".card-list")}} label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction onClick={() => { this.props.func(".accordeur")}} label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction onClick={() => { this.props.func(".metronome")}} label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
      </div>
    )
  }
}
