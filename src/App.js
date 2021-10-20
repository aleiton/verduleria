import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';

import Header from "./Header";
import List from "./List";
import ListPrices from "./ListPrices";

function App() {
  const [page, setPage] = useState('cart');

  return (
    <div className="app">
      <Header onClick={(value) => setPage(value)}>Verduleria</Header>
      <div className="container">
        {page === 'cart'? <List /> : <ListPrices />}
      </div>
    </div>
  );
}

export default App;
