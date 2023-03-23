/* eslint-disable linebreak-style */
// eslint-disable-next-line react/prefer-stateless-function
import React, { Component } from 'react';
import NavBar from './NavBar';
import Dashboard from './Dashboard';
import Login from './Login';
import ShoppingCart from './ShoppingCart';
import CustomersList from './CustomersList';
// eslint-disable-next-line import/order
import { Route, Switch } from 'react-router';
// eslint-disable-next-line import/order
import { BrowserRouter } from 'react-router-dom';
import NoMatchPage from './NoMatchPage';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <div className="container-fluid">
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/customers" exact component={CustomersList} />
            <Route path="/cart" exact component={ShoppingCart} />
            <Route path="*" component={NoMatchPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
