import React from "react";
import { Route, Switch } from "react-router-dom";
import { ROUTE } from "./constants/routes";
import Home from "./containers/Home";
import Login from "./containers/Login";
import NotFound from "./containers/NotFound";

export default function Routes() {
  return (
    <Switch>
      <Route exact path={ROUTE.home}>
        <Home />
      </Route>
      <Route exact path={ROUTE.login}>
        <Login />
      </Route>
      {/* Finally, catch all unmatched routes */}
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}
