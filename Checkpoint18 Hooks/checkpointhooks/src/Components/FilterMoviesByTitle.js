import React, { useState, useRef } from "react";
import { arr } from "./DataTvMovies";
import MovieCard from "./MovieCard";
import MovieList from "./MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import { FormControl, Button } from "react-bootstrap";

const FilterMoviesByTitle = () => {
  let [title, setTitle] = useState("Movie Title");
  // we declare the input inside the variable
  let titleRef = useRef();
  // we are referring to input to change the value
  const filteredMovieByTitle = () => {
    setTitle(titleRef.current.value);
  };
  const foundTitle = (arr,str) => {
    var aa;
    aa=arr.findIndex(el=>el.title===str);
    if(aa==-1) return "Not found"
    else return MovieCard(arr[aa])
  }
  
  return (
    <div className="SearchMovie1">
      <p>Results of the search for: {title}</p>
      <div className="SearchMovie">
         <FormControl
            placeholder="The title of the movie you are searching for"
            aria-label="The title of the movie you are searching for"
            aria-describedby="basic-addon2"
            ref={titleRef}
            type="text"
          />
        <Button type="button" variant="dark" onClick={filteredMovieByTitle}>
          Filter Movies By Title
        </Button>
      </div>
      <div className="found">
       {foundTitle(arr,title)}
      </div>
    </div>
  );
};

export default FilterMoviesByTitle;
