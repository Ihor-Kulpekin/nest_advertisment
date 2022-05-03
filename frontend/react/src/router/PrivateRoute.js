import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ token, children, path, exact }) => (
  <Route path={path} exact={exact}>
    {
      token ? (
        children
      ) : (
        <Redirect to='/login' />
      )
    }
  </Route>
);
