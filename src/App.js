import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';

import Header from "./Header";
import List from "./List";
import ListPrices from "./ListPrices";
import Checkout from "./Checkout";

function App() {
  const [page, setPage] = useState('cart');
  /* const [VALOR, FUNCION_ACTUALIZAR_VALOR] = useState(VALOR_INICIAL); */

  const route = () => {
    switch(page) {
      case 'cart':
        return <List onClick={() => setPage('checkout')}/>;
      case 'price':
        return <ListPrices />
      case 'checkout':
        return <Checkout />
      default:
        return null;
    };
  };

  return (
    <div className="app">
      <Header onClick={(value) => setPage(value)}>Verduleria</Header>
      <div className="container">
        {route()}
      </div>
    </div>
  );
}

export default App;
