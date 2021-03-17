import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

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

export default () => {
    const [selected, setSelected] = useState(options[0]);

    return (
        <div>
            <Dropdown
                options={options}
                selected={selected}
                onSelectedChange={setSelected}
            />
        </div>
    );
};
