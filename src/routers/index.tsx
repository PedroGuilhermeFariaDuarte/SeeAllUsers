import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Pages
import Home from "../pages/Home";

const routers: React.FC = () => {
  return <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Home} />
    </Switch>
  </BrowserRouter>
}

export default routers
