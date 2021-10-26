import React from "react";

const Item = ({ name, quantity, price, onChange, onlyPrice }) => {
  if (onlyPrice) {
    return (
      <div className="list-item">
        <span>{name}</span>
        <div className="list-item-info">
          <input
            name={name}
            value={price}
            onChange={onChange}
          />
        </div>
      </div>
    );
  }

  const formattedPrice = `$${price} c/u`;

  return (
    <div className="list-item">
      <span>{name}</span>
      <div className="list-item-info">
        <input
          name={name}
          value={quantity}
          onChange={onChange}
        />
        <span>{formattedPrice}</span>
      </div>
    </div>
  );
}

export default Item;

