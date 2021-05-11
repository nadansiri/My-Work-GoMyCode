import React, { useState, useRef } from "react";
import { arr } from "./DataTvMovies";
import MovieCard from "./MovieCard";
import MovieList from "./MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import { FormControl,Button } from "react-bootstrap";

const FilterMoviesByRating = () => {
  let [Rating, setRating] = useState("  ");
  // we declare the input inside the variable
  let RatingRef = useRef();
  // we are referring to input to change the value
  const filteredMovieByRating = () => {
    setRating(RatingRef.current.value);
  };
  const foundRating = (arr,str) => {
    var aa;
    aa=arr.findIndex(el=>el.rating===str);
    if(aa==-1) return "Not found"
    else return MovieCard(arr[aa])
  }
  
  return (
    <div className="SearchMovie1" >
      <p>Results of the search for a movie rated: {Rating}/10</p>
      <div className="SearchMovie">
      <FormControl
            placeholder="The Rating of the movie you are searching for"
            aria-label="The Rating of the movie you are searching for"
            aria-describedby="basic-addon2"
            ref={RatingRef}
            type="text"
          />
        <Button variant="dark" onClick={filteredMovieByRating}>
          Filter Movies By Rating
        </Button>
      </div>
      <div className="found">
       {foundRating(arr,Rating)}
      </div>
    </div>
  );
};

export default FilterMoviesByRating;
