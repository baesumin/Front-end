import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import Header from './components/Header';
import Home from './screens/Home';
import Design from './screens/Design';
import Community from './screens/Community';
import Survey from './screens/Survey';

function App() {
  return (
    <div className="app">
      <Router>
        <>
          <Header />
          <AppBody>
            <AppLeft>AppLeft</AppLeft>
            <AppCenter>
              <Switch>
                <Route path="/" exact>
                  <Home />
                </Route>
                <Route path="/design" exact>
                  <Design />
                </Route>
                <Route path="/community" exact>
                  <Community />
                </Route>
                <Route path="/survey" exact>
                  <Survey />
                </Route>
              </Switch>
            </AppCenter>
            <AppRight>AppRight</AppRight>
          </AppBody>
          <AppFooter>
            <p>Copyright © 2021 xx.co.,Ltd. All rights reserved.</p>
            <address>Contact baesumin for more information. 010-2498-3718</address>
          </AppFooter>
        </>
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  justify-content: space-around;
`;
const AppLeft = styled.div``;
const AppCenter = styled.div``;
const AppRight = styled.div``;
const AppFooter = styled.div`
  border-top: 1px solid lightgray;
`;
