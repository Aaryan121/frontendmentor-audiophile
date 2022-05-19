import React from "react";
import cart from "../Assets/img/cart.png";
import styles from "../styles/Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.nav}>
      <h2 className={styles.logo}>audiophile</h2>
      <ul className={styles.anker}>
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
