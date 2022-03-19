import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <header className="banner">
      <p>
        <span className="yellow"> Nouveau </span> MacBook Pro Super puissance
        pour les pros.
      </p>
      <img
        src="https://www.apple.com/v/macbook-pro-14-and-16/a/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png?202112210140"
        alt="macbook"
        className="banner-img"
      />
    </header>
  );
};

export default Banner;
