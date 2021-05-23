import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import WatchTrailer from "./WatchTrailer";

const MovieList = (Arr) => {
  return (
    <div className="MovieList">
      {Arr.map((el) => {
        return (
            <Router>
                <div>
            <Link to={`/${el.title}`}>{el.title}</Link>
            {MovieCard(el)}
            <Route path={`/${el.title}`}>
                <WatchTrailer title={el.title} trailer={el.trailer} description={el.description}/>
            </Route>
          </div>
            </Router>
          
        );
      })}
    </div>
  );
};

export default MovieList;
