import React from "react";
import "../Styles/Mac.css";
import { Link } from "react-router-dom";

const Mac = () => {
  return (
    <div>
      <div className="mac-banner">
        <p>
          <span className="mac-yellow"> Nouveau </span> MacBook Pro Super
          puissance pour les pros.
        </p>
        <button className="mac-btn">Acheter</button>
        <Link to={"/AboutMac"} className="mac-btn2">
          En savoir plus
        </Link>
        <img
          src="https://www.apple.com/v/macbook-pro-14-and-16/a/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png?202112210140"
          alt="macbook"
          className="mac-banner-img"
        />
      </div>
      <div className="sections">
        <h1>Quel Mac vous faut-il ? </h1>
        <nav>
          <a href="#Ordinateur portable">Ordinateur portable</a>
          <a href="#Ordinateur de bureau">Ordinateur de bureau</a>
        </nav>
        <section id="Ordinateur portable">
          <img
            width="150px"
            height="150px"
            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-gold-select-201810?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1633027804000"
            alt="MacbookAir"
          />
          <p>MacBook Air</p>
          <button className="btn">Acheter</button>
          <button className="btnn">En savoir plus</button>
          <img
            width="150px"
            height="150px"
            src="https://uno.ma/media/catalog/product/cache/1/image/598x598/9df78eab33525d08d6e5fb8d27136e95/m/a/macbook-pro-2020-m1-gris-sideral-uno-maroc.jpg"
            alt="MacbookPro13"
          />
          <p>MacBook Pro 13</p>
          <button className="btn">Acheter</button>
          <button className="btnn">En savoir plus</button>
          <img
            width="150px"
            height="150px"
            src="https://img.generation-nt.com/macbook-pro-14-16-arm-m1_01677126.jpg"
            alt="MacbookAir"
          />
          <p>MacBook Pro 14″ et 16″</p>
          <button className="btn">Acheter</button>
          <button className="btnn">En savoir plus</button>
        </section>
        <section id="Ordinateur de bureau">
          <img
            width="150px"
            height="150px"
            src="https://www.notebookcheck.biz/fileadmin/Notebooks/News/_nc3/Apple_M1_iMac_2021_refresh_drdNBC.jpg"
            alt="iMac 24″"
          />
          <p>iMac 24″</p>
          <button className="btn">Acheter</button>
          <button className="btnn">En savoir plus</button>
          <img
            width="150px"
            height="150px"
            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-2019-imac-27-gallery?wid=2000&hei=2000&fmt=jpeg&qlt=80&.v=1559961087002"
            alt="iMac 27″"
          />
          <p>iMac 27″</p>
          <button className="btn">Acheter</button>
          <button className="btnn">En savoir plus</button>
          <img
            width="150px"
            height="150px"
            src="https://www.samma3a.com/tech/ar/wp-content/uploads/sites/3/2019/06/mac-Pro.jpg"
            alt="Mac Pro"
          />
          <p>Mac Pro</p>
          <button className="btn">Acheter</button>
          <button className="btnn">En savoir plus</button>
        </section>
      </div>
    </div>
  );
};

export default Mac;
