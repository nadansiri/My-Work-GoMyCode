import React, { useState, useRef } from "react";
import { arr } from "./DataTvMovies";
import MovieCard from "./MovieCard";
import MovieList from "./MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const AddNewMovie = () => {
  let [title, setTitle] = useState("Movie Title");
  let [description, setDescription] = useState("Movie Description");
  let [posterURL, setPosterURL] = useState(
    "https://i.pinimg.com/originals/ac/2a/75/ac2a75a5d8457b7ec0bcf61c06b85416.gif"
  );
  let [rating, setRating] = useState("00");

  // we declare the input inside the variable
  let titleRef = useRef();
  let descriptionRef = useRef();
  let posterURLRef = useRef();
  let ratingRef = useRef();
  // we are referring to input to change the value
  const AddedMovie = () => {
    setTitle(titleRef.current.value);
    setDescription(descriptionRef.current.value);
    setPosterURL(posterURLRef.current.value);
    setRating(ratingRef.current.value);
  };

  return (
    <div className="NewMovie">
      <div className="NewMovieDetails">
      <h6>New Movie added by user</h6>
      <br/>
      <br/>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="The title of the movie"
            aria-label="The title of the movie"
            aria-describedby="basic-addon2"
            ref={titleRef}
            type="text"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="The description of the movie"
            aria-label="The description of the movie"
            aria-describedby="basic-addon2"
            ref={descriptionRef}
            type="text"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="The Poster URL of the movie"
            aria-label="The Poster URL of the movie"
            aria-describedby="basic-addon2"
            ref={posterURLRef}
            type="text"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="The rating of the movie"
            aria-label="The rating of the movie"
            aria-describedby="basic-addon2"
            ref={ratingRef}
            type="text"
          />
        </InputGroup>
        <Button  className="ButtonAdd" variant="dark" onClick={AddedMovie}>
          Add Movie
        </Button>
      </div>
      <div className="CardOfAdded">
        <MovieCard
          title={title}
          description={description}
          posterURL={posterURL}
          rating={rating}
        />
        {arr.push({
           title:{title},
           description:{description},
           posterURL:{posterURL},
           rating:{rating} 
        })}
      </div>
    </div>
  );
};

export default AddNewMovie;
