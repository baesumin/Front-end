import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
    {
        title: 'what is React?',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS library among engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by createing components'
    }
];

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color green',
        value: 'green'
    },
    {
        label: 'The Color blue',
        value: 'blue'
    }
];

const showAccordion = () => {
    if (window.location.pathname === '/') {
        return <Accordion items={items} />;
    }
};

const showList = () => {
    if (window.location.pathname === '/list') {
        return <Search />;
    }
};

const showDropdown = () => {
    if (window.location.pathname === '/dropdown') {
        return <Dropdown />;
    }
};

const showTranslate = () => {
    if (window.location.pathname === '/translate') {
        return <Translate />;
    }
};

export default () => {
    const [selected, setSelected] = useState(options[0]);
    return (
        <div>
            <Header />
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                    label="Select a color"
                />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    );
};
