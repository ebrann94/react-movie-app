import React, { useState, useEffect } from 'react';
import { processResults, handleJSONResponse } from '../../utils';
import MovieList from './MovieList';

const ResultsList = ({ title, url, ...props }) => {
    const [results, setResults] = useState([]);
    const [error, setError] = useState('');

    const fetchResults = () => {
        fetch(url)
            .then(handleJSONResponse)
            .then(processResults)
            .then(apiResults => setResults(apiResults))
            .catch(e => setError('Unable to connect to server'));
    };

    useEffect(() => {
        fetchResults();
    }, [url]);

    return (
         <div className="results-list-flex">
             <div className="results-list-container">
                 <h1 className="results__title">{title}</h1>
                 {
                     error ? <p>{error}</p> : <MovieList list={results}/>
                 }
             </div>
         </div>
    )
};

export default ResultsList;