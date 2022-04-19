import React from "react";
import { useParams } from "react-router-dom";

const CheckOut = () => {
  const { checkOutId } = useParams();
  return (
    <div>
      <h3>CheckOut</h3>
      {checkOutId}
    </div>
  );
};

export default CheckOut;
