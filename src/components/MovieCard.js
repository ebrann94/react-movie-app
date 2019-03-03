import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = (props) => {
    return (
        <div>
            <p>{props.title} ({props.releaseYear})</p>
            {props.posterPath && <img src={`https://image.tmdb.org/t/p/original${props.posterPath}`} width="100px"/>}
            <div className="extra-info">
                <p>Overview: {props.overview}</p>
            </div>
            <Link to={`/movie/${props.movieID}`}>More Info</Link>
        </div>

    );
}

export default MovieCard;