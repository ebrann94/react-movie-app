import React from 'react';
import MovieCard from './MovieCard'

const MovieList = ({ list }) => {
    return (
        <div>
            {
                list.map(movie => {
                    return <MovieCard key={movie.movieID} {...movie} />
                })
            }
        </div>
    )
}

export default MovieList;