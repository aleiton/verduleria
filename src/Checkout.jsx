import React from "react";

import "./Checkout.css";

const Checkout = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(event);
  };

  return (
    <form className="checkout" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nombre:</label>
        <input id="name" type="text" name="name" />
      </div>
      <div>
        <label htmlFor="street">Calle:</label>
        <input id="street" type="text" name="street" />
      </div>
      <div>
        <label htmlFor="streetNumber">Número de calle:</label>
        <input id="streetNumber" type="number" name="streetNumber" />
      </div>
      <div>
        <label htmlFor="phone">Celular</label>
        <input id="phone" type="phone" name="phone" />
      </div>
      <button>Submit</button>
    </form>
  );
};

export default Checkout;
