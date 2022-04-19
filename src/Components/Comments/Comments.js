import React from "react";
import "./Comments.css";

const Comments = (props) => {
  const { name, img, price, ratings, comment } = props.comments;
  return (
    <div className="review-cart">
      <img className="comment-img" src={img} alt="" />

      <h3 className="review-name"> {name}</h3>
      <h5>Price:{price}</h5>
      <h4> {comment}</h4>
      <button className="cart-btn">Book</button>
    </div>
  );
};

export default Comments;
