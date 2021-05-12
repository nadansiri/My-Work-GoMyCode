import React, { useState, useRef } from "react";
import MovieCard from "./MovieCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const Arr2 = [
  {
    title: "Crimson Peak",
    description:
      "In the aftermath of a family tragedy, an aspiring author is torn between love for her childhood friend and the temptation of a mysterious outsider. Trying to escape the ghosts of her past, she is swept away to a house that breathes, bleeds - and remembers.",
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BZmNkYzk3YjItOTMwYy00ZWViLWIxMTUtZDJiZmY0ZWExYjVmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
    rating: "6.5",
  },
  {
    title: "The Good Place",
    description:
      "Four people and their otherworldly frienemy struggle in the afterlife to define what it means to be good.",
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BYmMxNjM0NmItNGU1Mi00OGMwLTkzMzctZmE3YjU1ZDE4NmFjXkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_UX182_CR0,0,182,268_AL_.jpg",
    rating: "8.2",
  },
  {
    title: "This Beautiful Fantastic",
    description:
      "A young woman who dreams of becoming a children's book author makes an unlikely friendship with a cantankerous, rich old widower.",
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BMTY5MjEyMDk2N15BMl5BanBnXkFtZTgwODMyMTQzMTI@._V1_UX182_CR0,0,182,268_AL_.jpg",
    rating: "6.9",
  },
  {
    title: "Penny Dreadful",
    description:
      "Explorer Sir Malcolm Murray, American gunslinger Ethan Chandler, scientist Victor Frankenstein and medium Vanessa Ives unite to combat supernatural threats in Victorian London.",
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BMTQ0Mzg2NzcyNl5BMl5BanBnXkFtZTgwMDE1NzU2NDE@._V1_UY268_CR7,0,182,268_AL_.jpg",
    rating: "8.5",
  },
];
export default Arr2;

export const MoviesData = () => {
  let [title, setTitle] = useState("Movie Title");
  let [description, setDescription] = useState("Movie Description");
  let [posterURL, setPosterURL] = useState(
    "https://i.pinimg.com/originals/ac/2a/75/ac2a75a5d8457b7ec0bcf61c06b85416.gif"
  );
  let [rating, setRating] = useState("00");
  let titleRef = useRef();
  let descriptionRef = useRef();
  let posterURLRef = useRef();
  let ratingRef = useRef();

  const UpdateMoviesData = (Arr2) => {
    Arr2.push(
      {
        title: titleRef.current.value,
        description:descriptionRef.current.value,
        posterURL:posterURLRef.current.value,
        rating:ratingRef.current.value,
      },
    );
    return Arr2;
  };

  const AddedMovie = () => {
    setTitle(titleRef.current.value);
    setDescription(descriptionRef.current.value);
    setPosterURL(posterURLRef.current.value);
    setRating(ratingRef.current.value);
    UpdateMoviesData(Arr2);
  };
  return (
    <div className="NewMovie">
      <div className="NewMovieDetails">
        <h6>New Movie added by user</h6>
        <br />
        <br />
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
        <Button className="ButtonAdd" variant="dark" onClick={AddedMovie}>
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
        {}
      </div>
    {console.log(Arr2)}
    </div>
  );
};
