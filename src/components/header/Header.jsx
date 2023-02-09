import React from "react";
import Navbar from "./Navbar";
import Hero from "../hero/Hero";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header" id="home">
      <Navbar />
      <Hero />
    </header>
  );
};

export default Header;
