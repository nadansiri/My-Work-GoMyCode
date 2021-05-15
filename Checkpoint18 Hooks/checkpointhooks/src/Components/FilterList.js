import React, { useState, useRef } from "react";
import MovieList from './MovieList';
import Arr2 from './MoviesData';
import "bootstrap/dist/css/bootstrap.min.css";
import { FormControl,Button } from "react-bootstrap";

const FilterList = () => {
  let [SearchFor, setSearchFor] = useState(" Search For ");
  // we declare the input inside the variable
  let SearchForRef = useRef();
  // we are referring to input to change the value
  const filteredMovie = () => {
    setSearchFor(SearchForRef.current.value);
  };
  const found = (Arr2,str) => {
    let aa=[];
    aa=Arr2.filter(el=>el.title===str|el.rating===str);
    if(aa.length===0) return "Not found"
    else return MovieList(aa)
  }
  
    return (
        <div className="SearchMovie1" >
      <p>Results of the search: </p>
      <div className="SearchMovie">
      <FormControl
            placeholder="Search Movies"
            aria-label="Search Movies"
            aria-describedby="basic-addon2"
            ref={SearchForRef}
            type="text"
          />
        <Button variant="dark" onClick={filteredMovie}>
          Filter Movies
        </Button>
      </div>
      <div className="found">
       {found(Arr2,SearchFor)}
      </div>
    </div>
    )
}
export default FilterList
