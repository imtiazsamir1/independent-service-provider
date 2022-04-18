import { Button } from "bootstrap";
import React from "react";
import "./Comments.css";

const Comments = (props) => {
  const { name, img, ratings, comment } = props.comments;
  return (
    <div className="review-cart">
      <img className="comment-img" src={img} alt="" />

      <h3 className="review-name">Name: {name}</h3>
      <h4>Comment: {comment}</h4>

      <h5>Ratings:{ratings}</h5>
      <button>Book</button>
    </div>
  );
};

export default Comments;
