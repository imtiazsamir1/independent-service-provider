import React from "react";
import Footer from "../Footer/Footer";
import banner from "../Home/img/sports2.jpg";
import Review from "../Review/Review";
// import DemoPic from "./Components/DemoPic/Demopic";

const Home = () => {
  return (
    <div>
      <div>
        <img className="d-block w-100" src={banner} alt="First slide" />
      </div>
      <h2>My Sarvices</h2>
      <Review></Review>
      <Footer></Footer>
    </div>
  );
};

export default Home;
