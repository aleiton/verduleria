import React, { useState } from "react";

import Item from "./Item";
import Total from "./Total";

const List = () => {
  const [bananas, setBananas] = useState(0);
  const [manzanas, setManzanas] = useState(0);
  const [sandias, setSandias] = useState(0);
  const [kiwis, setKiwis] = useState(0);

  const updateBananas = (e) => {
    setBananas(Number(e.target.value));
  };
  const updateManzanas = (e) => {
    setManzanas(Number(e.target.value));
  };
  const updateSandias = (e) => {
    setSandias(Number(e.target.value))
  };
  const updateKiwis = (e) => {
    setKiwis(Number(e.target.value));
  };

  const calcularPrice = () => {
    const bananaTotal = bananas * 15;
    const manzanaTotal = manzanas * 10;
    const sandiaTotal = sandias * 60;
    const kiwiTotal = kiwis * 20;

    return (bananaTotal + manzanaTotal + sandiaTotal + kiwiTotal);
  }

  return (
    <div className="list">
      <h1>Carrito: </h1>
      <Item
        name="Bananas 🍌"
        quantity={bananas}
        price={15}
        onChange={updateBananas}
      />
      <Item
        name="Manzanas 🍎"
        quantity={manzanas}
        price={10}
        onChange={updateManzanas}
      />
      <Item
        name="Sandia 🍉"
        quantity={sandias}
        price={60}
        onChange={updateSandias}
      />
      <Item
        name="Kiwi 🥝"
        quantity={kiwis}
        price={20}
        onChange={updateKiwis}
      />
      <Total
        quantity={bananas + manzanas + sandias + kiwis}
        price={calcularPrice()}
      />
    </div>
  );
}

export default List;
