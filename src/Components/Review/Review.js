import React from "react";
import useComments from "../../Hooks/Hooks";
import Comments from "../Comments/Comments";
import "./Review.css";

const Review = () => {
  const [comments] = useComments();
  return (
    <div className="review-container">
      <div className="cart">
        {comments.map((comments) => (
          <Comments key={comments.id} comments={comments}></Comments>
        ))}
      </div>
    </div>
  );
};

export default Review;
