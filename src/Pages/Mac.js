import React from "react";
import "../Styles/Mac.css";

const Mac = () => {
  return (
    <div className="mac-banner">
      <p>
        <span className="mac-yellow"> Nouveau </span> MacBook Pro Super
        puissance pour les pros.
      </p>
      <button className="mac-btn">Acheter</button>
      <img
        src="https://www.apple.com/v/macbook-pro-14-and-16/a/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png?202112210140"
        alt="macbook"
        className="mac-banner-img"
      />
    </div>
  );
};

export default Mac;
