import React, { useState } from 'react';

const Accordion = ({ items }) => {
    const [activeIndex, SetActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        SetActiveIndex(index);
    };

    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex ? 'active' : '';

        return (
            <React.Fragment key={item.title}>
                <div
                    className={`title ${active}`}
                    onClick={() => onTitleClick(index)}
                >
                    <i className="dropdown icon">{item.title}</i>
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        );
    });

    return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
