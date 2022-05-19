import React from "react";
import Earphone from "../Assets/img/Earohone.png";
import Speaker from "../Assets/img/Speaker.png";
import Headphone from "../Assets/img/Headphone.png";
import Style from "../styles/Productinfo.module.css";
import Earphonehero from "../Assets/img/Earphonehero.png";
import Human from "../Assets/img/image-best-gear1.png";
import Footer from "../Assets/img/Footer.png";

function Productinfo() {
  return (
    <div className={Style.pi}>
      <div className={Style.products}>
        <div>
          <img className={Style.flexible} src={Headphone} alt="" />
        </div>
        <div>
          <img className={Style.flexible} src={Speaker} alt="" />
        </div>
        <div>
          <img className={Style.flexible} src={Earphone} alt="" />
        </div>
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
      <div>
        <img className={Style.Earphone} src={Earphonehero} alt="" />
      </div>
      <div>
        <div className={Style.best}>
          <div className={Style.textbox3}>
            <div className="heading2">BRINGING YOU THE BEST AUDIO GEAR</div>
            <p className="introText">
              Located at the heart of New Yok City. Audiophile is the pemier
              store for high end headphones, earphones, speakers and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to brouse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
            <button className="btn-secondary">SEE PRODUCT</button>
          </div>
          <div>
            <img src={Human} alt="" />
          </div>
        </div>
        <img className={Style.Earphone} src={Footer} alt="" />
      </div>
    </div>
  );
}

export default Productinfo;
