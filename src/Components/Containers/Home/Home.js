import React, { Component } from "react";
import "./Home.css";
import { Typography } from '@material-ui/core';





export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <Typography variant='h1' color='primary'>
            howdy partner
          </Typography>
          <Typography variant='h5' color='secondary'>
            welcome to my crib
          </Typography>
 
        </div>
      </div>
    );
  }
}

