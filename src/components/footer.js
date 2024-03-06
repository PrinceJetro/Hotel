import React from "react";
import { ReactDOM } from "react";
import "../styles/footer.css"

export default function Footer(){
    return(
      <div className="footer">
        <div className="row">

          <div className="first col-12">
            <a href="#">PRESS ROOM</a>
            <a href="#">GIFT CERTIFICATES <br/> & COOKBOOK</a>
            <a href="#">CONTACT</a>

          </div>

          <div className="second col-12">
              <a href="#" className="mb-4">KOKKARI</a>
              <p>KOKKARI ESTIATORIO</p>
              <p>200 JACKSON STREET (AT FRONT ST.)</p>
              <p>SAN FRANCISCO, CA 94111</p>
              <p className="mb-4">P: <a href="tel: 415.981.0983"> 415.981.0983</a></p>
              <a href="#">RESERVATIONS AND HOURS</a>
              <a href="#">Directions</a>
          </div>

          <div className="last col-12 mt-5" >
              <a href="#">© 2015-2024 Kokkari</a>
              <p>Photos by <a href="">Sara Remington</a> | Site by <a href="https://princejetro.verce.app">PrinceJetro</a></p>
          </div>

        </div>

      </div>
    )
}