import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home, About, NotFound, Blog} from "./Components/Containers";
// import Home from "./containers/Home.js"

export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/about" exact component={About} />
    <Route path="/blog" exact component={Blog} />
    {/* <Route path="/" exact component={Home} /> */}

    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>;
