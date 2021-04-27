import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { auth, provider } from '../firebase';
import { login } from '../redux/user';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const dispatch = useDispatch();

  const Login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoURL: userAuth.user.photoURL
          })
        );
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const register = () => {
    if (!name) {
      return alert('Please enter a full name!');
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoURL: profilePic
              })
            );
          });
      })
      .catch((error) => alert(error.message));
  };
  const GoogleLogin = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error) => {
      alert(error.message);
    });
  };

  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="https://play-lh.googleusercontent.com/nYxL5NswAFjaxpwYsF3OzlKSfvfQI3wSf-8T9UT3qxuoTGsfGddhvOaHTxY7nU820NM"
          alt=""
        />
        <h1>Sign in to Happ</h1>

        <form>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name (required if registering)"
            type="text"
          />
          <input
            value={profilePic}
            onChange={(e) => setProfilePic(e.target.value)}
            placeholder="Profile pic URL (optional)"
            type="text"
          />
          <input
            style={{ backgroundColor: 'lightgray' }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
          />
          <input
            style={{ backgroundColor: 'lightgray' }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
          />
        </form>

        <Button onClick={Login} style={{ backgroundColor: 'black' }}>
          SIGN IN
        </Button>
        <Button style={{ backgroundColor: '#DE1F00' }} onClick={GoogleLogin}>
          Sign in with Google
        </Button>
        <p>
          Not a member? <LoginRegister onClick={register}>Register Now</LoginRegister>
        </p>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: flex;
  justify-content: center;
  place-items: center;
  background-color: light;
`;
const LoginInnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.24);

  > h1 {
    margin-bottom: 20px;
    font-family: Roboto;
  }
  > img {
    object-fit: contain;
    height: 100px;
  }
  > Button {
    display: flex;
    margin-top: 5px;
    text-transform: intherit !important;
    color: white;
  }
  > form {
    display: flex;
    flex-direction: column;
  }
  > form > input {
    width: 350px;
    height: 40px;
    font-size: 20px;
    margin-bottom: 10px;
    border-radius: 5px;
  }
  > p {
    margin-top: 5px;
  }
`;
const LoginRegister = styled.span`
  cursor: pointer;
  color: #0177b7;
`;
