import React from 'react';
import '../css/footer.css';
// import axios from 'axios';

const Footer = () => {
  return (
    <>
      <div class="footer">
        <div id="button"></div>
        <div id="container">
          <div id="cont">
            <div class="footer_center">
              <h3>Nuestro Equipo</h3>
            </div>
            <div className="team_container">
              <div className="cards_container"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
