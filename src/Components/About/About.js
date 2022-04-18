import React from "react";
import formal from "./img/formal.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="about-me">
      <h2>Hii!</h2>
      <img className="about-img" src={formal} alt="" />
      <h1> I am Imtiaz Rahman Samir</h1>
      <p>
        I am studying on BSC in CSE at Grren University Of Bangladesh.I am 24
        years old.I want to be a Full Stack Web Developer.Now I am learning web
        development from Programming Hero.My goal is to become a Developer.I am
        working hard to achieve my goal though it is very difficult for me to
        mainatin my daily works.But I tried my best and I will alltime.
      </p>
    </div>
  );
};

export default About;
