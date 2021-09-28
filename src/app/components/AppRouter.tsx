import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ActionBoard, ConfigBoard } from 'app/components/boards/';

export const AppRouter: FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/play">
          <ActionBoard />
        </Route>
        <Route path="/">
          <ConfigBoard />
        </Route>
      </Switch>
    </Router>
  );
};
