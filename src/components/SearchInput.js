import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

const SearchInput = ({ history, location }) => {
    const [searchQuery, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (location.pathname.includes('search')) {
            history.push(`/search/${searchQuery}`);
        } else {
            history.push(`/search/${searchQuery}`);
        }
        setQuery('');
    }

    return (
        <div className="search-container">
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="query" 
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setQuery(e.target.value)}
                    className="search__input"
                />
                <input type="submit" name="submit" value="Search" />
            </form>
        </div>
    ); 
} 
    

export default withRouter(SearchInput);