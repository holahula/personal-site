import React, { Component, Fragment } from 'react'
import { Header, Footer } from './Components/Layouts'
import { MuiThemeProvider } from '@material-ui/core/styles';
import muiTheme from "./Theme/Theme";
// import { About, Home, NotFound } from './containers'
// import Exercises from './Components/Exercises'

class App extends Component {
  state = {
    
  }
  render(){
    return (
      <MuiThemeProvider theme={muiTheme}>
        <Fragment>
          <Header/>
          <Footer/>
        </Fragment> 
      </MuiThemeProvider>
    )
  }
}

export default App