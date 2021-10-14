import React from "react";

const Total = ({ quantity, price }) => {
  return (
    <div className="total-info">
        <span>{quantity}</span>
        <span>{`$${price}`}</span>
    </div>
  );
};

export default Total;

