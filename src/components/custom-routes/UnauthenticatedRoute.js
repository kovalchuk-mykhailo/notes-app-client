import React from "react";
import { Route, Redirect } from "react-router-dom";

import { useAppContext } from "../../libs/contextLib";
import { ROUTES } from "../../constants/routes";
import config from "../../config";

const querystring = (name, url = window.location.href) => {
  name = name.replace(/[[]]/g, "\\$&");

  const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)", "i");
  const results = regex.exec(url);

  if (!results) {
    return null;
  }
  if (!results[2]) {
    return "";
  }

  return decodeURIComponent(results[2].replace(/\+/g, " "));
};

const UnauthenticatedRoute = ({ children, ...rest }) => {
  const { isAuthenticated } = useAppContext();
  const redirect = querystring("redirect");

  return (
    <Route {...rest}>
      {!isAuthenticated ? (
        children
      ) : (
        <Redirect
          to={redirect === "" || redirect === null ? ROUTES.home : redirect}
        />
      )}
    </Route>
  );
};

export default UnauthenticatedRoute;
