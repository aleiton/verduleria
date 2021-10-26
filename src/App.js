import React, { useState } from "react";
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import logo from './logo.svg';
import './App.css';

import Header from "./Header";
import List from "./List";
import ListPrices from "./ListPrices";
import Checkout from "./Checkout";

function App() {
  const [page, setPage] = useState('cart');
  /* const [VALOR, FUNCION_ACTUALIZAR_VALOR] = useState(VALOR_INICIAL); */

  return (
    <Router>
      <div className="app">
        <Header>Verduleria</Header>
        <div className="container">
          <Switch>
            <Route path="/cart">
              <List onClick={() => setPage('checkout')}/>
            </Route>
            <Route path="/price">
              <ListPrices />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
          </Switch>
        </div>
      </div>


    </Router>
  );
}

export default App;
