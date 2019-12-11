import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from '../components/Landing/Landing';
import MarketContainer from '../containers/MarketContainer/MarketContainer';
import SellerProfile from '../components/SellerProfile/SellerProfile';
import GuitarDetails from '../components/GuitarDetails/GuitarDetails';
import Allen from '../components/Allen/Allen';



export default ({ currentUser, setCurrentUser, guitars, setLowHighPrice, resetFilters, filteredByName, handleChange, handlePurchase }) => (
  <div className="routes">
    <Switch>
      <Route exact path='/' render={() => <Landing guitars={guitars} currentUser={currentUser} setCurrentUser={setCurrentUser}/>} />
      <Route path="/buy/" render={() => <MarketContainer guitars={guitars} currentUser={currentUser} setLowHighPrice={setLowHighPrice} resetFilters={resetFilters} filteredByName={filteredByName} handleChange={handleChange} /> } />
      <Route path="/sell/:id" render={() => <SellerProfile currentUser={currentUser} />} />
      <Route path="/details/:id" render={() => <GuitarDetails handlePurchase={handlePurchase} />} />
      <Route path="/allen" component={Allen} />
    </Switch>
  </div>
);
