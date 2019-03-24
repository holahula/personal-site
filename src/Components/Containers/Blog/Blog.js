import React, { Component } from "react";
import "./Blog.css";
import { Typography, Hidden, Button } from "@material-ui/core";
import { Link } from 'react-router-dom';

// const posters = require.context('../Movies/Posters', true);

// const Lazycomponent1 = React.lazy(() => import('../Movies/Movies'))

export default class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <div className="lander">
          <Typography variant="h1" color="primary">
            work in progress
          </Typography>
          <Hidden xsDown>
            <Typography variant="h6" color="secondary">
              tm
            </Typography>
            <Typography variant="h5" color="secondary">
              but follow me on  
              <Button
            style={{ 
              fontSize: '24px',
              textTransform: "lowercase",
              marginTop: '-4.5px',
              color: '#283593'
            }}
            color="primary.dark" 
            // variant="outlined" 
            target="_blank"  
            href="https://letterboxd.com/holahula"
          >
            letterboxd
          </Button>
              while you're here
            </Typography>

            <Button style={{fontSize: '18px', textTransform: 'lowercase'}} color="primary" size="md" component={Link} to="/movies">Some of my favorite movies</Button>

          </Hidden>
          <br></br>
        </div>
        <div className="pl5"></div>
        <div className="pl6"></div>
      </div>

    );
  }
}