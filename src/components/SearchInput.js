import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

const SearchInput = ({ history }) => {
    const [searchQuery, setQuery] = useState('');

    // console.log(props);

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`search/${searchQuery}`);
        setQuery('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="query">Search: </label>
                <input 
                    type="text" 
                    name="query" 
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setQuery(e.target.value)}
                />
                
            </form>
        </div>
    ); 
} 
    

export default withRouter(SearchInput);