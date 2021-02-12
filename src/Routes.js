import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./containers/Home";
import Login from "./containers/Login";
import NotFound from "./containers/NotFound";
import Signup from "./containers/Signup";
import NewNote from "./containers/NewNote";
import Notes from "./containers/Notes";
import Settings from "./containers/Settings";
import { ROUTES } from "./constants/routes";

export default function Routes() {
  return (
    <Switch>
      <Route exact path={ROUTES.home}>
        <Home />
      </Route>
      <Route exact path={ROUTES.login}>
        <Login />
      </Route>
      <Route exact path={ROUTES.signup}>
        <Signup />
      </Route>
      <Route exact path={ROUTES.newNote}>
        <NewNote />
      </Route>
      <Route exact path={ROUTES.singleNote}>
        <Notes />
      </Route>
      <Route exact path="/settings">
        <Settings />
      </Route>
      {/* Finally, catch all unmatched routes */}
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}
