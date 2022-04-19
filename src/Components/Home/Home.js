import React from "react";
import Footer from "../Footer/Footer";
import banner from "../Home/img/sports2.jpg";
import Review from "../Review/Review";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import "./Home.css";
import { Card, CardGroup } from "react-bootstrap";
import { Button } from "bootstrap";
import Extra from "../Extra/Extra";
import { Carousel } from "bootstrap";
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
      <div>
        {/* <CardGroup>
          <Card className="cart">
            <Card.Img variant="top" src={img1} />
            <Card.Body>
              <Card.Title>
                <h3>Sprint</h3>
              </Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <button>Book Now</button>
            </Card.Footer>
          </Card>
          <Card className="cart">
            <Card.Img variant="top" src={img2} />
            <Card.Body>
              <Card.Title>Swimming</Card.Title>
              <Card.Text>
                swimming, in recreation and sports, the propulsion of the body
                through water by combined arm and leg motions and the natural
                flotation of the body. Swimming as an exercise is popular as an
                all-around body developer and is particularly useful in therapy
                and as exercise for physically handicapped persons.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <button>Book Now</button>
            </Card.Footer>
          </Card>
          <Card className="cart">
            <Card.Img variant="top" src={img3} />
            <Card.Body>
              <Card.Title>Rugby</Card.Title>
              <Card.Text>
                Rugby is a 15-a-side team sport. The object of the game is to
                ground the ball behind the opponent's try line, into what is
                called the in-goal area. Rugby is played both with the ball in
                hand and by kicking the ball. However, when the ball is being
                carried in hand it can only be thrown or handed off backwards.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <button>Book Now</button>
            </Card.Footer>
          </Card>
        </CardGroup> */}
      </div>

      {/* <Review></Review> */}
      <Footer></Footer>
    </div>
  );
};

export default Home;
