import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = (props) => {
    return (
        <div className="movie">
            <h3 className="movie__title">{props.title} <span className="movie__year">({props.releaseYear})</span></h3>
            <div className="movie__info-wrapper">
                {props.posterPath && <img src={`https://image.tmdb.org/t/p/original${props.posterPath}`} className="movie__poster"/>}
                <div className="extra-info">
                    <p className="movie__overview">{props.overview}</p>
                </div>
            </div>
            <Link to={`/movie/${props.movieID}`} className="movie__more-info">More Info</Link>
        </div>

    );
}

export default MovieCard;