import React from "react";
import AddIcon from "@material-ui/icons/Add";
import "../Styles/Ipad.css";

export const Ipad = () => {
  return (
    <div className="ipad-banner">
      <p>
        <span className="ipad-purple"> Nouveau </span>
        iPad <span>mini</span>Méga puissant. <br />
        Tout mini.
      </p>
      <button className="ipad-btn">Acheter</button>
      <button className="ipad-btn2">
        En savoir plus <AddIcon />
      </button>
      <img
        src="https://dyw7ncnq1en5l.cloudfront.net/optim/product/62/62627/d816b516-ipad-mini-2021__450_400.jpeg"
        alt="ipad"
        className="ipad-banner-img"
      />
    </div>
  );
};
