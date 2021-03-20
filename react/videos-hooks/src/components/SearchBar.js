import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
    const [term, setTerm] = useState('');

    const onInputChange = (event) => {
        setTerm(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();

        // TODO: Make sure we call
        // callback from parent component
        onFormSubmit(term);
    };

    return (
        <div className="search-bar ui segment">
            <form onSubmit={onSubmit} className="ui form">
                <label>Search For A video</label>
                <input type="text" value={term} onChange={onInputChange} />
            </form>
        </div>
    );
};

export default SearchBar;
