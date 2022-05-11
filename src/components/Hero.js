import React from "react";

// scss
import "../scss/hero.scss";

export default function Hero() {
  return (
    <div className="hero">
      <h1>We make your music sound extraordinary.</h1>
      <p className="hero__p">
        A system audio equalizer specifically designed for Android and iOS.
        Freely tune the way your music sounds with a professional grade
        parametric EQ &amp; volume mixer. Control bass, mids, treble, gain
        control, reverb, and more!
      </p>
    </div>
  );
}
