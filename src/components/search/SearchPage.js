import React, { useState, useEffect } from 'react';
import MovieList from '../shared/MovieList';
import { processResults, handleJSONResponse } from '../../utils';

// class SearchPage extends React.Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             searchResults: []
//         }
//     }
//
//     fetchResults() {
//         const searchQuery = this.props.match.params.query;
//
//         fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.props.apiKey}&language=en-US&query=${searchQuery}&page=1`)
//             .then(handleJSONResponse)
//             .then(processResults)
//             .then(results => {this.setState(() => ({searchResults: results}))})
//             .catch(e => this.setState({ error: 'Unable to fetch search results. Try again soon'}))
//     }
//
//     componentDidMount() {
//         this.fetchResults();
//     }
//
//     componentDidUpdate(prevProps) {
//         const prevQuery = prevProps.match.params.query;
//         const currentQuery = this.props.match.params.query;
//
//         if (prevQuery !== currentQuery) {
//             this.fetchResults();
//         }
//     }
//
//     render() {
//         return(
//             <div className="results-list-flex">
//                 <div className="results-list-container">
//                     <h1>Results for: {this.props.match.params.query}</h1>
//                     <MovieList list={this.state.searchResults}/>
//                 </div>
//             </div>
//         );
//     }
// }

const SearchPage = ({ match, apiKey }) => {
    const [searchResults, setSearchResults] = useState([]);
    const [error, setError] = useState('');

    const fetchResults = () => {
        const searchQuery = match.params.query;

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchQuery}&page=1`)
            .then(handleJSONResponse)
            .then(processResults)
            .then(results => setSearchResults(results))
            .catch(e => setError('Unable to connect to server'))
    };

    useEffect(() => {
        fetchResults();
    }, [match.params.query]);
    console.log(searchResults);
    return(
        <div className="results-list-flex">
            <div className="results-list-container">
                <h1>Results for: {match.params.query}</h1>
                {
                    error ? <p>{error}</p> : <MovieList list={searchResults}/>
                }
            </div>
        </div>
    );
};

export default SearchPage;