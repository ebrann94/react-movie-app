import React from 'react';
import MovieList from '../shared/MovieList';
import { processResults } from '../../utils';

class SearchPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchResults: []
        }
    }

    fetchResults() {
        const searchQuery = this.props.match.params.query;

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.props.apiKey}&language=en-US&query=${searchQuery}&page=1`)
            .then(res => res.json())
            .then(processResults)
            .then(results => {this.setState(() => ({searchResults: results}))});
    }

    componentDidMount() {
        this.fetchResults();
    }

    componentDidUpdate(prevProps) {
        const prevQuery = prevProps.match.params.query;
        const currentQuery = this.props.match.params.query;

        if (prevQuery !== currentQuery) {
            this.fetchResults();
        }
    }

    render() {
        return(
            <div>
                <h1>Results for: {this.props.match.params.query}</h1>
                <MovieList list={this.state.searchResults} />
            </div>
        );
    }
}

export default SearchPage;