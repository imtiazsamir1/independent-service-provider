import React from "react";
import { Card, CardGroup, Col, Row } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="about-footer">
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
        </div>
        <div>© Copyright 2017-20 BD Photographers. All rights reserved.</div>
      </div>
    </div>
  );
};

export default Footer;
