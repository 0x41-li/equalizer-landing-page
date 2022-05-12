import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SecondSection from "./components/SecondSection";

// Scss
import "./scss/app.scss";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <SecondSection />
    </>
  );
}
