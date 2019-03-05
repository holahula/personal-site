import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button, AppBar, Typography, Toolbar, Hidden } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithubAlt, faLinkedin } from '@fortawesome/free-brands-svg-icons'
// import Icon from '@material-ui/core/Icon';
import PropTypes from 'prop-types';

const styles = theme => ({
  text: {
    paddingTop: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
  }, 
  subHeader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
    paddingRight: 30,
    background: 'transparent',
    boxShadow: 'none'
  },
  toolbar: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: "10px"
  },
  grow: {
    flexGrow: 1,
  },
  root: {
    flexGrow: 1,
  },
  typo: {
    flexGrow: 1,
    textAlign: "right",
    },
  coffee: {
    marginLeft: 8,
  },
  tripleIcon: {
    // margin: ,
  },
  footIcons: {
    textAlign: "center",
    position: "absolute",
    width: "100%",
    height: "80%", 
    marginTop: "-10px"
    // margin: "auto"
  },
  button: {
    flexGrow: 1,
    marginBottom: "0",
  },
});

function BottomAppBar(props) {
  const { classes } = props;
  return (
  <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.root}>
            <Typography className={classes.footIcons}>
              < Button 
                target = "_blank"
                href = "https://www.linkedin.com/in/jiang-austin/"
                className = {classes.button} 
              >
                <FontAwesomeIcon 
                  color = "#283593"
                  icon={faLinkedin} 
                  size='lg'
                  className={classes.tripleIcon}/>
              </Button>
              < Button 
                target = "_blank"
                href = "https://github.com/holahula"
                className = {classes.button} 
              >
                <FontAwesomeIcon 
                color = "#283593"
                icon={faGithubAlt} 
                size='lg'
                className={classes.tripleIcon}/>
              </Button>
              < Button 
                // target = "_blank"
                href = "mailto:austin.jiang@uwaterloo.ca"
                className = {classes.button} 
              >
                <FontAwesomeIcon 
                color = "#283593"
                icon={faEnvelope} 
                size='lg'
                className={classes.tripleIcon}/>
              </Button>
            </Typography>
          </div>
         
          <div className={classes.root}>
            {/* <Typography textAlign="center">
              Howdy
            </Typography> */}
            <Hidden xsDown>
              <Typography variant="body1" color="primary" className={classes.typo}>
                powered by coffee 
                <FontAwesomeIcon 
                  color = "#283593"
                  icon={faCoffee} 
                  size='md'
                className={classes.coffee}/>
              </Typography>
            </Hidden>
            {/* <Icon className={classNames(classes.icon, 'fa fa-plus-circle')} color="dark" /> */}
          
          </div>
        </Toolbar>
      </AppBar>
  );
}

BottomAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomAppBar);