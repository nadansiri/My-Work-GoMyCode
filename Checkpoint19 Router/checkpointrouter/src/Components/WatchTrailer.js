import React from "react";

const WatchTrailer = (props) => {
  return (
  <div className="Trailer">
      <h1>{props.title}</h1>
      {props.trailer}
      <p>{props.description}</p>
    </div>
    )
};

export default WatchTrailer;
