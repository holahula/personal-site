import React, { Component } from "react";
import "./Blog.css";
import { Typography, Hidden, Button } from "@material-ui/core";
 


export default class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <div className="lander">
          <Typography variant="h1" color="primary">
            coming soon
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
          </Hidden>
          <br></br>
        </div>
      </div>
    );
  }
}