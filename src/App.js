import React from "react";

// components
import Header from "./components/Header";
import Hero from "./components/Hero";
import SecondSection from "./components/SecondSection";
import Footer from "./components/Footer";

// Scss
import "./scss/app.scss";

export default function App() {
  return (
    <main>
      <Header />
      <Hero />
      <SecondSection />
      <Footer />
    </main>
  );
}
