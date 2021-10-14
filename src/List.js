import React from "react";

import Item from "./Item";
import Total from "./Total";

const List = () => {
  return (
    <div className="list">
      <h1>Carrito: </h1>
      <Item
        name="Bananas 🍌"
        quantity={4}
        price={15}
      />
      <Item
        name="Manzanas 🍎"
        quantity={6}
        price={10}
      />
      <Item
        name="Sandia 🍉"
        quantity={1}
        price={60}
      />
      <Item
        name="Kiwi 🥝"
        quantity={5}
        price={20}
      />
      <Total
        quantity={16}
        price={280}
      />
    </div>
  );
}

export default List;
