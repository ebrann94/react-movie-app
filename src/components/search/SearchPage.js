import React from 'react';
import MovieList from '../shared/MovieList';
import { processResults } from '../../utils';

class SearchPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            apiKey: 'a337cb9ccaa0c3b43011d85ff6246ced',
            query: props.match.params.query,
            searchResults: []
        }
    }

    fetchResults() {
        const searchQuery = this.state.query;

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.state.apiKey}&language=en-US&query=${searchQuery}&page=1`)
            .then(res => res.json())
            .then(processResults)
            .then(results => {this.setState(() => ({searchResults: results}))});
    }

    componentDidMount() {
        // fetchresults();
    }

    componentDidUpdate() {
        // console.log(this.state);
    }

    render() {
        return(
            <div>
                <h1>Search Page!</h1>
                <div>
                    <MovieList list={this.state.results} />
                </div>
            </div>
        );
    }
}

export default SearchPage;