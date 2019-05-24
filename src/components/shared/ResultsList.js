import React, { Component } from 'react';
import { processResults } from '../../utils';
import MovieList from './MovieList';

class ResultsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            results: []
        }
    }

    fetchResults() {
        fetch(this.props.url)
            .then(res => res.json())
            .then(processResults)
            .then(results => this.setState({ results }));
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
                <h1>{this.props.title}</h1>
                <MovieList list={this.state.results}/>
            </div>
        )
    }
}

export default ResultsList;