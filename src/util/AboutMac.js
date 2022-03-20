import React from "react";
import "../Styles/AboutMac.css";

const AboutMac = () => {
  return (
    <div className="container">
      <nav>
        <a href="#Présentation">Présentation </a>
        <a href="#Caractéristiques">Caractéristiques</a>
      </nav>
      <section id="Présentation">
        <h5>MacBook Pro</h5>
        <img
          src="https://www.apple.com/v/macbook-pro-14-and-16/a/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png?202112210140"
          alt="macbook"
        />
        <h1>Super­puissance </h1> <h1>pour les pros.</h1>
        <p>
          Le plus puissant des MacBook Pro est arrivé. Avec la puce M1 Pro ou M1
          Max, la première conçue par Apple pour les pros, vous bénéficiez de
          performances exceptionnelles et d’une incroyable autonomie. Ajoutez à
          cela un sublime écran Liquid Retina XDR, la meilleure caméra et le
          meilleur système audio jamais intégrés à un portable Mac et tous les
          ports dont vous avez besoin. Premier portable du genre, le MacBook Pro
          est un véritable monstre.
        </p>
      </section>
      <section id="Caractéritiques"></section>
    </div>
  );
};

export default AboutMac;
