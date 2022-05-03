import React from 'react';
import {Redirect, Route} from 'react-router-dom';

export const PublicRoute = ({children, path, exact }) => {
  return (
    <Route path={path} exact={exact}>
      {
        children
      }
    </Route>
  )
};
