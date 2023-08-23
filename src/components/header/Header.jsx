import React from "react";
import Navbar from "./navbar";
import Hero from "../hero/hero";
import "./header.scss";

const Header = () => {
  return (
    <header className="header" id="home">
      <Navbar />
      <Hero />
    </header>
  );
};

export default Header;
