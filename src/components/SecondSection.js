import React from "react";

// scss
import "../scss/second-section.scss";

// images/logos
import mobilePhone from "../assets/images/mobile-phone.png";
import desktopPhone from "../assets/images/desktop-phone.png";
import appleLogo from "../assets/logos/apple.svg";
import androidLogo from "../assets/logos/android.svg";

export default function SecondSection() {
  return (
    <div className="second-section">
      <div className="second-section__phone">
      <img className="second-section__phone-img" src={mobilePhone} alt="" />
      <img className="second-section__phone-img" src={desktopPhone} alt="" />
      </div>
      <div className="second-section__card">
        <h2 className="second-section__card__h2">Premium EQ</h2>
        <p className="second-section__card__p">
          Get expert-level control with a robust equalizer, volume mixer, and
          spatial audio. Take your listening experience to a whole new level and
          access all our incredible features!
        </p>
        <p className="second-section__card__price-month">
          <span className="second-section__card__price">$4</span>
          <span className="second-section__card__month">/ month</span>
        </p>
        <div className="second-section__card__btns">
          <button className="second-section__card__apple-btn-dwnld">
            <img src={appleLogo} alt="" />
            <span>iOS Download</span>
          </button>
          <button className="second-section__card__android-btn-dwnld">
            <img src={androidLogo} alt="" />
            <span>Android Download</span>
          </button>
        </div>
      </div>
    </div>
  );
}
