import React from 'react';
import MovieCard from '../MovieCard';

const ResultsList = (props) => (
    <div>
        <p>Search Results List</p>
        {
            props.searchResults.map((movie, i) => (
                <MovieCard {...movie} key={i} />
            ))
        }
    </div>
);

export default ResultsList;