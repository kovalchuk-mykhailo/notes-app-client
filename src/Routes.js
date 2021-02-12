import React from "react";
import { Route, Switch } from "react-router-dom";

import UnauthenticatedRoute from "./components/custom-routes/UnauthenticatedRoute";
import AuthenticatedRoute from "./components/custom-routes/AuthenticatedRoute";
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
      <UnauthenticatedRoute exact path={ROUTES.login}>
        <Login />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path={ROUTES.signup}>
        <Signup />
      </UnauthenticatedRoute>
      <AuthenticatedRoute exact path={ROUTES.newNote}>
        <NewNote />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path={ROUTES.singleNote}>
        <Notes />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path={ROUTES.settings}>
        <Settings />
      </AuthenticatedRoute>
      {/* Finally, catch all unmatched routes */}
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}
