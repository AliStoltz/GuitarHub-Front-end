import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from '../components/Landing/Landing';


export default ({ currentUser, setCurrentUser }) => (
  <div className="routes">
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route path="/buy" />
      <Route path="/sell/" />
    </Switch>
  </div>
);