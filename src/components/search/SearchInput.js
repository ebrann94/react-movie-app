import React from 'react';

const SearchInput = (props) => (
    <div>
        <form onSubmit={props.handleSubmit}>
            <input type="text" name="query" placeholder="Search..."/>
            
        </form>
    </div>
);

export default SearchInput;