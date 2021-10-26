import React, { useState } from "react";

import { products } from "./services/products";
import Item from "./Item";
import Total from "./Total";

const ListPrices = () => {
  const [fruits, setFruits] = useState(products);

  const updateFruit = (e) => {
    const { name, value } = e.target;

    const updatedFruit = fruits.map(
      fruit => fruit.name.trim() === name.trim() ? { ...fruit, price: Number(value) } : fruit
    );
    setFruits(updatedFruit);
  }

  console.table(fruits);

  return (
    <div className="list">
      <h1>Precios $: </h1>
      {fruits.map(fruit => {
        return (
          <Item
            name={fruit.name}
            quantity={fruit.quantity}
            price={fruit.price}
            onChange={updateFruit}
            onlyPrice
          />
        );
      })}
    </div>
  );
}

export default ListPrices;
