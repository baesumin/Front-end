import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';

import Header from './components/Header';
import Home from './screens/Home';
import Design from './screens/Design';
import Community from './screens/Community';
import Survey from './screens/Survey';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Widget from './components/Widget';

function App() {
  const [googleUser, loading] = useAuthState(auth);
  console.log(loading);
  return (
    <AppContainer>
      <Router>
        {!googleUser ? (
          <Login />
        ) : (
          <>
            <Header />
            <AppBody>
              <Sidebar>AppLeft</Sidebar>
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
              <Widget />
            </AppBody>
            <AppFooter>
              <p>Copyright © 2021 xx.co.,Ltd. All rights reserved.</p>
              <address>Contact baesumin for more information. 010-2498-3718</address>
            </AppFooter>
          </>
        )}
      </Router>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  background-color: #f4f2f0;
  border: 1px solid green;
  @media screen and (max-width: 1080px) {
    width: 1080px;
  }
`;
const AppBody = styled.div`
  display: flex;
  width: 1080px;
  margin: auto;
  border: 1px solid blue;
`;
const AppCenter = styled.div`
  width: 580px;
  height: 900px;
  border: 1px solid black;
  border-radius: 1px;
`;

const AppFooter = styled.div`
  background-color: #f4f2f0;
  width: 1080px;
  border-top: 2px solid lightgray;
  text-align: center;
  margin: auto;
`;