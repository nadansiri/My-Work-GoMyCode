import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import WatchTrailer from "./WatchTrailer";
//<Card.Title><Link to={`${match.url}/${props.title}`}>{props.title}</Link>
//<Card.Title>{props.title}</Card.Title>
const MovieCard = (props) => {
  return (
    
      <div className="MovieCard">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={props.posterURL} alt="Poster" />
          <Card.Body>
            <Card.Title>
              {props.title}
            </Card.Title>
            <Card.Text style={{ height: "15rem" }}>
              {props.description}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Rating: {props.rating}/10</small>
          </Card.Footer>
        </Card>
        
      </div>
    
  );
};

export default MovieCard;
