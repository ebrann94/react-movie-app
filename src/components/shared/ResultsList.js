import React, { Component } from 'react';
import { processResults, handleJSONResponse } from '../../utils';
import MovieList from './MovieList';

class ResultsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            results: [],
            error: ''
        }
    }

    fetchResults() {
        fetch(this.props.url)
            .then(handleJSONResponse)
            .then(processResults)
            .then(results => this.setState({ results }))
            .catch(e => this.setState({ error: 'Unable to connect to server' }));
    }

    componentDidMount() {
        this.fetchResults();
    }

    componentDidUpdate(prevProps) {
        if (this.props.url !== prevProps.url) {
            this.fetchResults();
        }
    }

    render() {
        return (
            <div className="results-list-container">
                <h1 className="results__title">{this.props.title}</h1>
                <MovieList list={this.state.results}/>
            </div>
        )
    }
}

export default ResultsList;