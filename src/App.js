import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';

import List from "./List";
import ListPrices from "./ListPrices";

function App() {
  const [page, setPage] = useState('carrito');


  return (
    <div className="container">
      <nav>
        <ul>
          <li
            onClick={() => setPage('carrito')}
          >Carrito</li>
          <li
            onClick={() => setPage('precios')}
          >Precios</li>
        </ul>
      </nav>
      <header>VERDULERIA</header>
      {page === 'carrito'? <List /> : <ListPrices />}
    </div>
  );
}

export default App;
