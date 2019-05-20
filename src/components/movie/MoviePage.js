import React from 'react';
import MovieCard from '../shared/MovieCard';

class MoviePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            apiKey: 'a337cb9ccaa0c3b43011d85ff6246ced',
            movieID: props.match.params.id,
            movieDetails: {

            }
        }
    }

    fetchMovieDetails() {
        fetch(`https://api.themoviedb.org/3/movie/${this.state.movieID}?api_key=${this.state.apiKey}&language=en-US`)
            .then(res => res.json())
            .then(data => {
                const newMovieDetails = {
                    title: data.title,
                    posterPath: data.poster_path,
                    releaseYear: new Date(data.release_date).getFullYear(),
                    overview: data.overview
                }

                this.setState((prevState) => ({
                    movieDetails: {
                        ...prevState.movieDetails,
                        ...newMovieDetails
                    }
                }));
            });
    }

    fetchCredits() {
        fetch(`https://api.themoviedb.org/3/movie/${this.state.movieID}/credits?api_key=${this.state.apiKey}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const cast = data.cast.map(({name, character}) => {
                    return {
                        name,
                        character
                    }
                });

                let director = '';
                const crew = data.crew.map(({name, job}) => {
                    if (job.toLowerCase() === 'director') director = name;

                    return {
                        name,
                        job
                    }
                });

                this.setState((prevState) => ({
                    cast,
                    crew,
                    movieDetails: {
                        ...prevState.movieDetails,
                        director
                    }
                }));
            })
    }

    componentDidMount() {
        this.fetchMovieDetails();
        this.fetchCredits();
    }

    componentDidUpdate() {
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <h1>Movie Page!</h1>
                <MovieCard {...this.state.movieDetails} />
                <p>Director: {this.state.movieDetails.director}</p>
                <div className="cast-list">
                    <h3>Cast</h3>
                    {this.state.cast &&
                        <ul>
                            {
                                this.state.cast.map(({name, character}, index) => (
                                    <li key={index}>{name}: {character}</li>
                                ))
                            }
                        </ul>
                    }
                </div>
                <div className="crew-list">
                    <h3>Crew</h3>
                    {this.state.crew &&
                        <ul>
                            {
                                this.state.crew.map(({name, job}, index) => (
                                    <li key={index}>{name}: {job}</li> 
                                ))
                            }
                        </ul>
                    }
                </div>
            </div>
        );
    }
}

export default MoviePage;