import React from "react";
import styles from "../styles/Hero.module.css";

function Hero() {
  return (
    <div className={styles.heroCard}>
      <div className="lightText">New Product</div>
      <div className="heading">XX99 MARK II HEADPHONES</div>
      <p className="introText">
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </p>
      <button className="btn">SEE PRODUCT</button>
    </div>
  );
}

export default Hero;
