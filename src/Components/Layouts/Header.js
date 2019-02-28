import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Routes from "../../Routes";

// import { About, Home, NotFound } from '../containers'
// import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit, 
    //marginLeft: 50
  },
  input: {
    display: 'none',
  },
  root: {
      flexGrow: 1,
    },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  appBar: {
    // padding: 35, 
    paddingRight: 30,
    background: 'transparent',
    boxShadow: 'none'
  }
});


function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar>
          <IconButton className={classes.menuButton} color="default" aria-label="Menu">
          </IconButton>
          <Typography variant="h6" color="secondary" className={classes.grow}>
            Austin Jiang
          </Typography>
          <Button 
            color="primary" 
            component={Link} to="/"
          >
            home
          </Button>
          {/* <Button color="primary" component={Link} to="/About">About</Button> */}
          <Button color="primary" component={Link} to="/Blog">Blog</Button>
          <Button 
            classname={classes.button} 
            color="primary.dark" 
            variant="outlined" 
            target="_blank"  
            href="https://s3.amazonaws.com/austin-resume/resumev2.pdf"
          >
            Resume
          </Button>
        </Toolbar>
      </AppBar>
      <Routes />      
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);