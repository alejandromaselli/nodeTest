import React from "react";
import Nav from './nav/Nav';

const Header = () => {
  return (
    <div className="header">
      <h1>World of text foundation API (WTF)</h1>
      <h2>Here you have the navigation menu to test the endpoints:</h2>
      <Nav />
    </div>
  );
};

export default Header;
