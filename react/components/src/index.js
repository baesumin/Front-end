import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail
                author="Sam"
                timeAgo="Today at 4:45PM"
                content="Nice blog post"
            />
            <CommentDetail
                author="Alex"
                timeAgo="Today at 2:00AM"
                content="I like the subject"
            />
            <CommentDetail
                author="Jane"
                timeAgo="Today at 5:00PM"
                content="I like the writing"
            />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));

// https://source.unsplash.com/random
