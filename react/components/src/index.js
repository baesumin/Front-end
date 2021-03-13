import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo="Today at 4:45PM"
                    content="Nice blog post"
                    avatar={faker.image.image()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo="Today at 4:45PM"
                    content="Nice blog post"
                    avatar={faker.image.image()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Alex"
                    timeAgo="Today at 2:00AM"
                    content="I like the subject"
                    avatar={faker.image.image()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Jane"
                    timeAgo="Today at 5:00PM"
                    content="I like the writing"
                    avatar={faker.image.image()}
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));

// https://source.unsplash.com/random
