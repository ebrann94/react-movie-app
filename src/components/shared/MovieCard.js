import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = (props) => {
    return (
        <div className="movie">
            <div className="movie__header">
                <h3 className="movie__title">{props.title} <span className="movie__year">({props.releaseYear})</span></h3>
                <div className="movie__vote-container">
                    <p className="movie__vote">{props.voteAverage}</p>
                    <img 
                        src="/images/gold_star.png" 
                        alt="Gold Star" 
                        width="32px"
                        className="movie__gold-star"
                    />
                </div>
            </div>
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