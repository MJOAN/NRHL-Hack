import React from "react";

const Lunch = props =>
  <div className="text-center">
    <img
      alt="img"
      className="img"
      src={props.src}
      style={{ margin: "0 auto" }}
    />
    <h3>
      Places for Lunch: {props.lunch}
    </h3>
    <h3>
      Food Type: {props.foodtype}
    </h3>
    <h3>
      Budget: {props.budget}
    </h3>
  </div>;

export default Lunch;
