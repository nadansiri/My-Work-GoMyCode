import React from 'react';
import MovieCard from './MovieCard';
import {arr} from "./DataTvMovies";

const MovieList = () => {
    return (
        <div className="MovieList">
            {arr.map(el=>MovieCard(el))}
        </div>
    )
}

export default MovieList
