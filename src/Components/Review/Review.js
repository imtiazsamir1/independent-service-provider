import React from "react";
import useComments from "../../Hooks/Hooks";
import Comments from "../Comments/Comments";
import "./Review.css";

const Review = () => {
  const [comments] = useComments();
  return (
    <div className="review-container">
      <h1 className="review-heading">This is Review</h1>
      <div className="cart">
        {comments.map((comments) => (
          <Comments key={comments.id} comments={comments}></Comments>
        ))}
      </div>
    </div>
  );
};

export default Review;
