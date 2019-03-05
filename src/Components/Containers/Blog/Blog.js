import React, { Component } from "react";
import "./Blog.css";
import { Typography, Hidden } from "@material-ui/core";
 


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
          </Hidden>
          <br></br>
        </div>
      </div>
    );
  }
}