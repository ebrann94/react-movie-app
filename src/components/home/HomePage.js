import React from 'react';
import PopularList from './PopularList';
import NewReleaseList from './NewReleaseList';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            apiKey: 'a337cb9ccaa0c3b43011d85ff6246ced',
            popularMovies: [],
            newRelease: []
        }
        // this.fetchPopular = this.fetchPopular.bind(this);
        this.fetchPopular();
    }

    fetchPopular() {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${this.state.apiKey}&language=en-US&page=1`)
            .then(res => res.json())
            .then(data => {
                const results = data.results.map(movie => {
                    return {
                        movieID: movie.id,
                        title: movie.title,
                        posterPath: movie.poster_path,
                        releaseYear: new Date(movie.release_date).getFullYear(),
                        overview: movie.overview
                    }
                });

                this.setState(() => ({popularMovies: results}));
            });
    }   

    fetchNewReleases() {

    }

    componentDidMount() {
        //this.fetchPopular();
    }

    render() {
        return (
            <div>
                <h1>Home Page!</h1>
                <PopularList popularMovies={this.state.popularMovies} />
                <NewReleaseList />
            </div>
        )
    }
}

export default HomePage;