import React from "react";

const Item = ({ name, quantity, price }) => {

  const formattedPrice = `$${price} c/u`;

  return (
    <div className="list-item">
      <span>{name}</span>
      <div className="list-item-info">
        <input value={quantity} />
        <span>{formattedPrice}</span>
      </div>
    </div>
  );
}

export default Item;

