import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import history from './history';

const App = () => {
    return (
        <div>
            <Router history={history}>
                <Header />
                <div>App</div>
            </Router>
        </div>
    );
};

export default App;
