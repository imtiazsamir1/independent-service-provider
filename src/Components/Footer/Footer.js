import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="about-footer">
        <div>
          <h3>PHOTOGRAPHARS</h3>
          <p>
            BD Photographers is the first online platform for photographers in
            Bangladesh. The professional photographer's directory comes to you
            where you can find professional photographers in quick, convenient,
            & efficient manner. Find amazing photographers as per your
            requirements and budget! Find talented photographers,
            cinematographers in all the genres.
          </p>
        </div>
        <div>
          <h3>DISCOVER</h3>
          <a className="footer-ancor" href="">
            Browse Photographers
          </a>
          <br />
          <a className="footer-ancor" href="">
            Photography Offers
          </a>
        </div>
        <div>
          <h3>NEWSLETTER</h3>
          <p>
            Subscribe to get our amazing photography tips, offers & updates.
          </p>
        </div>
      </div>
      <div>© Copyright 2017-20 BD Photographers. All rights reserved.</div>
    </div>
  );
};

export default Footer;
