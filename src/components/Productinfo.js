import React from "react";
import Earphone from "../Assets/img/Earohone.png";
import Speaker from "../Assets/img/Speaker.png";
import Headphone from "../Assets/img/Headphone.png";
import Style from "../styles/Productinfo.module.css";

function Productinfo() {
  return (
    <div className={Style.pi}>
      <div className={Style.products}>
        <img src={Headphone} alt="" />
        <img src={Speaker} alt="" />
        <img src={Earphone} alt="" />
      </div>
      <div className={Style.speaker}>
        <div className={Style.introbox}>
          <div className={Style.blank}></div>
          <div className={Style.textbox}>
            <p className="heading ">ZX9 SPEAKER</p>
            <p className="introText">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <button className="btn-secondary">SEE PRODUCT</button>
          </div>
        </div>
      </div>
      <div className={Style.speakerHero}>
        <div className={Style.text2}>
          <p className="heading ">ZX9 SPEAKER</p>
          <button className="btn-secondary">SEE PRODUCT</button>
        </div>
      </div>
    </div>
  );
}

export default Productinfo;
