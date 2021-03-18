import React from 'react';

const header = () => {
    return (
        <div className="ui secondary pointing menu">
            <a href="/" className="item">
                Accordion
            </a>
            <a href="/list" className="item">
                Search
            </a>
            <a href="/dropdown" className="item">
                Dropdown
            </a>
            <a href="/translate" className="item">
                Translate
            </a>
        </div>
    );
};

export default header;
