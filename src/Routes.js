import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./containers/Home";
import Login from "./containers/Login";
import NotFound from "./containers/NotFound";
import Signup from "./containers/Signup";
import NewNote from "./containers/NewNote";
import { ROUTE } from "./constants/routes";

export default function Routes() {
  return (
    <Switch>
      <Route exact path={ROUTE.home}>
        <Home />
      </Route>
      <Route exact path={ROUTE.login}>
        <Login />
      </Route>
      <Route exact path={ROUTE.signup}>
        <Signup />
      </Route>
      <Route exact path={ROUTE.newNote}>
        <NewNote />
      </Route>
      {/* Finally, catch all unmatched routes */}
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}
