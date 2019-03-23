import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home, About, NotFound, Blog} from "./Components/Containers";
import "./Routes.css";
// import Home from "./containers/Home.js"
import { TransitionGroup, CSSTransition } from 'react-transition-group';
export default () =>
  <Route render={({ location }) => (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={1000}  
        classNames='message'
      >
        <Switch location={location}>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/blog" exact component={Blog} />
          { /* Finally, catch all unmatched routes */ }
          <Route component={NotFound} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  )}/>
  
