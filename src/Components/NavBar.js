import React from "react";
import "./NavBar.css";
import SearchIcon from "@material-ui/icons/Search";

const NavBar = () => {
  return (
    <div className="nav">
      <a href="/">
        <img
          className="logo"
          src="https://logo-marque.com/wp-content/uploads/2020/04/Apple-Logo.png"
          alt="Apple"
        />
      </a>
      <a href="/Mac">Mac</a>
      <a href="/iPad">iPad</a>
      <a href="#iPhone">iPhone</a>
      <a href="#Music">Music</a>
      <a href="#Assistance">Assistance</a>
      <a href="#Où acheter">Où acheter</a>
      <a href="/">
        <SearchIcon />
      </a>
    </div>
  );
};

export default NavBar;
