import React from 'react';

const MovieCard = (props) => {
    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/original${props.posterPath}`} width="100px"/>
            <p>{props.title}</p>
        </div>
    );
}

export default MovieCard;