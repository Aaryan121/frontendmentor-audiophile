import React from "react";
import cart from "../Assets/img/cart.png";

function Navbar() {
  return (
    <div className="">
      <h2>audiophile</h2>
      <ul>
        <li>HOME</li>
        <li>HEADPHONES</li>
        <li>SPEAKERS</li>
        <li>EARPHONES</li>
      </ul>
      <div>
        <img src={cart} alt="" />
      </div>
    </div>
  );
}

export default Navbar;
