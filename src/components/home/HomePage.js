import React from 'react';
import MovieList from '../shared/MovieList';
import { processResults } from '../../utils';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            popularMovies: []
        }
    }

    fetchPopular() {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${this.props.apiKey}&language=en-US&page=1`)
            .then(res => res.json())
            .then(processResults)
            .then(results => {
                this.setState(() => ({popularMovies: results}))
            });
    }   

    fetchNewReleases() {

    }

    componentDidMount() {
        this.fetchPopular();
    }

    render() {
        return (
            <div>
                <h1>Home Page!</h1>
                <MovieList list={this.state.popularMovies} />
            </div>
        )
    }
}

export default HomePage;