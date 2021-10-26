import React from "react";
import { Link } from "react-router-dom";
import cartLogo from "./assets/cart.png";
import priceLogo from "./assets/price.png";

const Header = ({ children }) => {
  return (
    <nav>
      <header>{children}</header>
      <ul>
        <Link to="/cart">
          <img src={cartLogo}/>
          Carrito
        </Link>
        <Link to="/price">
          <img src={priceLogo}/>
          Precios
        </Link>
      </ul>
    </nav>
  );
};

export default Header;
