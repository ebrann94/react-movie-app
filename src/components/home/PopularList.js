import React from 'react';
import MovieCard from '../MovieCard';

const PopularList = (props) => (
    <div>
        <p>Popular Movie List</p>
        {
            props.popularMovies.map((movie, i) => {
                return <MovieCard {...movie} key={i} />
            })
        }
    </div>
);

export default PopularList;