import React from "react";

// images and logos
import mainLogo from "../assets/logos/main-logo.png";

// css
import "../scss/header.scss";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <img src={mainLogo} alt="" />
      </div>
    </header>
  );
}
