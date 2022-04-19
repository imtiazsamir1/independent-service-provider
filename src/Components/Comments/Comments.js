import React from "react";
import { useNavigate } from "react-router-dom";
import "./Comments.css";

const Comments = (props) => {
  const { book, name, img, price, comment } = props.comments;
  const navigate = useNavigate();
  const navigateDetail = (id) => {
    navigate(`/checkOut/${book}`);
  };
  return (
    <div className="review-cart">
      <img className="comment-img" src={img} alt="" />

      <h3 className="review-name"> {name}</h3>
      <h5>Price:{price}</h5>
      <h4> {comment}</h4>
      <button onClick={() => navigateDetail(book)} className="btn btn-primary">
        Book:{name}
      </button>
    </div>
  );
};

export default Comments;
