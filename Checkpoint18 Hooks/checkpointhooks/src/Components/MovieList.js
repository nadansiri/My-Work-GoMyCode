import React from 'react';
import MovieCard from './MovieCard';
import Arr2 from './MoviesData';
const MovieList = (Arr) => {
    return (
        <div className="MovieList">
            {Arr.map((el,key)=>MovieCard(el))}
        </div>
    )
}

export default MovieList;
