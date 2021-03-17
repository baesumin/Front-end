import React from 'react';
import Accordion from './components/Accordion';

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

export default () => {
    return (
        <div>
            <Accordion items={items} />
        </div>
    );
};
