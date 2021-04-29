import React, { useEffect } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from './redux/user';

function App() {
  const user = useSelector((state) => state.user);
  const [googleUser, loading] = useAuthState(auth);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.profilePic
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <AppContainer>
      <Router>
        {!googleUser || !user ? (
          <Login />
        ) : (
          <>
            <Header />
            <AppBody>
              <Sidebar />
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
  /* height: 100vh; */
  /* border: 1px solid green; */
  @media screen and (max-width: 1080px) {
    width: 1080px;
  }
`;
const AppBody = styled.div`
  display: flex;
  width: 1080px;
  margin: auto;
  margin-top: 35px;
  /* border: 1px solid blue; */
`;
const AppCenter = styled.div`
  width: 580px;
  /* border: 1px solid black; */
`;

const AppFooter = styled.div`
  background-color: #f4f2f0;
  width: 100%;
  border-top: 2px solid lightgray;
  text-align: center;
  margin: auto;
`;
