import React from "react";
import "./styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <h6>
        Todos los derechos reservados 2003-2021. República Argentina. INCAA
        <br />
        Lima 319; Código Postal: C1073AAG, CABA; República Argentina
      </h6>
      <div>
        <ul>
          <li>
            <img src="http://cine.ar/img/logo-cinear.svg" alt="cine.ar" />
          </li>
          <li>
            <img src="http://cine.ar/img/logo-arsat.svg" alt="Arsat" />
          </li>
          <li>
            <img src="http://cine.ar/img/logo-incaa.svg" alt="Incaa" />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
