import React from 'react';
import MovieCard from './MovieCard'

const MovieList = ({ list }) => {
    return (
        <div className="movie-list">
            {
                list.map(movie => {
                    return <MovieCard key={movie.movieID} {...movie} />
                })
            }
        </div>
    )
};

export default MovieList;