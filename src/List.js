import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Item from "./Item";
import Total from "./Total";

const List = () => {
  const [bananas, setBananas] = useState(0);
  const [manzanas, setManzanas] = useState(0);
  const [sandias, setSandias] = useState(0);
  const [kiwis, setKiwis] = useState(0);
  const history = useHistory();
  /* useEffect(FUNCION_EFECTO_SECUNDARIO/CALLBACK/CB, ARRAY_DE_DEPENDENCIA); */

  useEffect(() => {
    console.log("MOUNT: HAGO UN EFECTO");
  }, []);

  useEffect(() => {
    console.log("MOUNT / UPDATE: HAGO OTRO EFECTO", manzanas);
  }, [manzanas]);

  useEffect(() => {
    // return () => console.log("UNMOUNT: LIMPIO LOS EFECTOS / HAGO ALGO");
  }, []);


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

  console.log("ME DIBUJO");

  const data = [
    {
      name: "Bananas 🍌",
      price: 15,
      quantity: bananas,
      onChange: updateBananas,
    },
    {
      name: "Manzanas 🍎",
      price: 10,
      quantity: manzanas,
      onChange: updateManzanas,
    },
    {
      name: "Sandia 🍉",
      price: 60,
      quantity: sandias,
      onChange: updateSandias,
    },
    {
      name: "Kiwi 🥝",
      price: 20,
      quantity: kiwis,
      onChange: updateKiwis,
    },
  ]

  const calcularPrice = () => {
    const bananaTotal = bananas * 15;
    const manzanaTotal = manzanas * 10;
    const sandiaTotal = sandias * 60;
    const kiwiTotal = kiwis * 20;

    return (bananaTotal + manzanaTotal + sandiaTotal + kiwiTotal);
  }

  const handleCheckout = () => {
    history.push("/checkout");
  };

  return (
    <div className="list">
      <h1>Carrito: </h1>
      {data.map(fruit => {
        return (
          <Item
            name={fruit.name}
            quantity={fruit.quantity}
            price={fruit.price}
            onChange={fruit.onChange}
            key={fruit.name}
          />
        );
      })}
      <Total
        quantity={bananas + manzanas + sandias + kiwis}
        price={calcularPrice()}
      />
      <button onClick={handleCheckout}>Go Checkout</button>
    </div>
  );
}

export default List;
