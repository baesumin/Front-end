import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import Login from './components/Login';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from './redux/user';
import Chat from './components/Chat';

function App() {
  const { user, title } = useSelector((state) => state.user);
  const [googleUser] = useAuthState(auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const htmlTitle = document.querySelector('title');
    htmlTitle.innerHTML = `Slack | ${title} | 테스트`;
  }, [title]);

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
    <div className="app">
      <Router>
        {!googleUser || !user ? (
          <Login />
        ) : (
          <>
            <Header />
            <AppBody>
              <Sidebar />
              <Switch>
                <Route path="/" exact>
                  <Chat />
                </Route>
              </Switch>
            </AppBody>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
