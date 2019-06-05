import React from 'react';
import CreditList from './CreditList';

class MoviePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movieID: props.match.params.id,
            movieDetails: {},
            cast: [],
            crew: []
        }
    }

    fetchMovieDetails() {
        fetch(`https://api.themoviedb.org/3/movie/${this.state.movieID}?api_key=${this.props.apiKey}&language=en-US`)
            .then(res => res.json())
            .then(data => {
                console.log(data.runtime);
                const newMovieDetails = {
                    title: data.title,
                    posterPath: data.poster_path,
                    releaseYear: new Date(data.release_date).getFullYear(),
                    overview: data.overview,
                    runtime: data.runtime,
                };

                this.setState((prevState) => ({
                    movieDetails: {
                        ...prevState.movieDetails,
                        ...newMovieDetails
                    }
                }));
            });
    }

    fetchCredits() {
        fetch(`https://api.themoviedb.org/3/movie/${this.state.movieID}/credits?api_key=${this.props.apiKey}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                const cast = data.cast.map(({ name, character, profile_path, id }) => {
                    return {
                        name,
                        role: character,
                        profilePath: profile_path,
                        id
                    }
                });

                let director;
                const crew = data.crew.map(({ name, job, id }) => {
                    if (job.toLowerCase() === 'director') director = name;

                    return {
                        name,
                        role: job,
                        id 
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

        window.scroll(0, 0);
    }

    componentDidUpdate() {
        // console.log(this.state);
    }

    render() {
        return (
            <div className="moviepage-container">
                <div className="moviepage__top-container">
                    <h1 className="moviepage__title">{this.state.movieDetails.title} ({this.state.movieDetails.releaseYear})</h1>
                    <div className="moviepage__info-container">
                        <img src={`https://image.tmdb.org/t/p/original${this.state.movieDetails.posterPath}`} className="moviepage__image"/>
                        <div className="moviepage__description">
                            <p className="readable">{this.state.movieDetails.overview}</p>
                            <div className="moviepage__principal-cast">
                                <p><strong>Director:</strong> {this.state.movieDetails.director}</p>
                                <p><strong>Runtime:</strong> {this.state.movieDetails.runtime}mins</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cast-list">
                    <h3>Cast</h3>
                    <CreditList list={this.state.cast} />
                </div>
                <div className="crew-list">
                    <h3>Crew</h3>
                    <CreditList list={this.state.crew} />
                </div>
            </div>
        );
    }
}

export default MoviePage;