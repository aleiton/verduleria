import React, { useState, useEffect } from "react";
import useFetch from 'use-http';
import spinner from './assets/spinner.gif';

import { getFruits } from "./services/products";
import Item from "./Item";
import Total from "./Total";

const ListPrices = () => {
  const [fruits, setFruits] = useState(null); // NULL lo interpretamos como que no se ha pedido la info - estado de carga / loading

  const { data, loading, error } = useFetch('http://localhost:3000/fruits', {}, []);
  console.log("LOADING", loading);
  console.log('DATA', data);

  useEffect(() => {
    // setTimeout(() => {
      // const { data, error } = await getFruits();
      if (error) {
        // HAGO ALGO
        console.error(error);
      } else {
        // HAPPY PATH
        console.log("Cuánto vale data? ", data);
        setFruits(data);
      }
    // }, 5000);
  }, [data])

  const updateFruit = (e) => {
    const { name, value } = e.target;

    if (!fruits) return;

    const updatedFruit = fruits.map(
      fruit => fruit.name.trim() === name.trim() ? { ...fruit, price: Number(value) } : fruit
    );
    setFruits(updatedFruit);
  }

  if (fruits === null) {
    return (
      <div className="list">
        <img className="spinner" src={spinner} />
      </div>
    );
  }

  return (
    <div className="list">
      <h1>Precios $: </h1>
      {fruits?.map(fruit => {
        return (
          <Item
            name={fruit.name}
            quantity={fruit.quantity}
            price={fruit.price}
            onChange={updateFruit}
            onlyPrice
            key={fruit.name}
          />
        );
      })}
    </div>
  );
}

export default ListPrices;
