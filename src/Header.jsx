import React from "react";
import cartLogo from "./assets/cart.png";
import priceLogo from "./assets/price.png";

const Header = ({ onClick, children }) => {
  return (
    <nav>
      <header>{children}</header>
      <ul>
        <li
          onClick={() => onClick('cart')}
        >
        <img src={cartLogo}/>
        Carrito</li>
        <li
          onClick={() => onClick('price')}
        >
        <img src={priceLogo}/>
        Precios</li>
      </ul>
    </nav>
  );
};

export default Header;
