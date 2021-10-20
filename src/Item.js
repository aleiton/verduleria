import React from "react";

const Item = ({ name, quantity, price, onChange, onlyPrice }) => {

  const formattedPrice = `$${price} c/u`;
  
  if (onlyPrice) {
    return (
      <div className="list-item">
        <span>{name}</span>
        <div className="list-item-info">
          <input
            value={price}
            onChange={onChange}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="list-item">
      <span>{name}</span>
      <div className="list-item-info">
        <input
          value={quantity}
          onChange={onChange}
        />
        <span>{formattedPrice}</span>
      </div>
    </div>
  );
}

export default Item;

