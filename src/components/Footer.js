import React from "react";

// scss
import "../scss/footer.scss";

// logos / icons
import mainLogo from "../assets/logos/main-logo.png";
import fbIcon from "../assets/logos/fb-icon.svg";
import instaIcon from "../assets/logos/insta-icon.svg";
import twitterIcon from "../assets/logos/twiiter-icon.svg";

export default function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        <img src={mainLogo} alt="" className="footer-logo__img" />
      </div>
      <div className="footer__text">
        <p className="footer__p">
          All rights reserved © Equalizer 2021 Have any problems? Contact us via
          social media or email us at 
          <span className="footer__email"> equalizer@example.com</span>
        </p>
      </div>
      <div className="footer__social-media">
        <img src={fbIcon} alt="" className="fb__img" />
        <img src={instaIcon} alt="" className="fb__img" />
        <img src={twitterIcon} alt="" className="fb__img" />
      </div>
    </footer>
  );
}
