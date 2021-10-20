import React, { useState } from "react";

import Item from "./Item";
import Total from "./Total";

const ListPrices = () => {
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

  return (
    <div className="list">
      <h1>Precios $$$: </h1>
      <Item
        name="Bananas 🍌"
        price={15}
        onChange={updateBananas}
        onlyPrice
      />
      <Item
        name="Manzanas 🍎"
        price={10}
        onChange={updateManzanas}
        onlyPrice
      />
      <Item
        name="Sandia 🍉"
        price={60}
        onChange={updateSandias}
        onlyPrice
      />
      <Item
        name="Kiwi 🥝"
        price={20}
        onChange={updateKiwis}
        onlyPrice
      />
    </div>
  );
}

export default ListPrices;
