import React from 'react';
import SearchInput from './SearchInput';
import ResultsList from './ResultsList';

class SearchPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            apiKey: 'a337cb9ccaa0c3b43011d85ff6246ced',
            searchTerm: '',
            searchResults: []
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const searchQuery = e.target.elements.query.value.toLowerCase();

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.state.apiKey}&language=en-US&query=${searchQuery}&page=1`)
            .then(res => res.json())
            .then(data => {
                const searchResults = data.results.map(movie => {
                    return {
                        title: movie.title,
                        posterPath: movie.poster_path,
                        releaseYear: new Date(movie.release_date).getFullYear(),
                        overview: movie.overview
                    }
                });
                return searchResults;
            })
            .then(results => {this.setState(() => ({searchResults: results}))});
        
        e.target.elements.query.value = '';
    }

    componentDidUpdate() {
        console.log(this.state);
    }

    render() {
        return(
            <div>
                <h1>Search Page!</h1>
                <SearchInput handleSubmit={this.handleSubmit} />
                <ResultsList searchResults={this.state.searchResults} />
            </div>
        );
    }
}

export default SearchPage;