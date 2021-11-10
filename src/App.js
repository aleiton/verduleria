import React, { useState, useEffect } from "react";
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import logo from './logo.svg';
import './App.css';

import Header from "./Header";
import List from "./List";
import ListPrices from "./ListPrices";
import Checkout from "./Checkout";

function App() {
  /* const [VALOR, FUNCION_ACTUALIZAR_VALOR] = useState(VALOR_INICIAL); */


  return (
    <Router>
      <div className="app">
        <Header>Verduleria</Header>
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Redirect to="/cart" />
            </Route>
            <Route path="/cart">
              <List />
            </Route>
            <Route path="/price">
              <ListPrices />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route path="/*">
              <h1>404 Page Not Found</h1>
            </Route>
          </Switch>
        </div>
      </div>

    </Router>
  );
}

export default App;
