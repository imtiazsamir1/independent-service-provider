import React from "react";
import Footer from "../Footer/Footer";
import banner from "../Home/img/sports2.jpg";
import Review from "../Review/Review";

import "./Home.css";

import Extra from "../Extra/Extra";

// import DemoPic from "./Components/DemoPic/Demopic";

const Home = () => {
  return (
    <div className="body">
      <div>
        <img className="d-block w-100" src={banner} alt="First slide" />
      </div>

      <h2 className="container-header">My Service</h2>
      <Review></Review>
      <Extra></Extra>
      <div></div>

      <Footer></Footer>
    </div>
  );
};

export default Home;
