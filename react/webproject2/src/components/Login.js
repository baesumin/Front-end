import { Button } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { auth, provider } from '../firebase';

function Login() {
  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="https://play-lh.googleusercontent.com/nYxL5NswAFjaxpwYsF3OzlKSfvfQI3wSf-8T9UT3qxuoTGsfGddhvOaHTxY7nU820NM"
          alt=""
        />
        <h1>Sign in to Happ</h1>
        <p>TokTok.WebProject</p>

        <Button
          onClick={(e) => {
            e.preventDefault();
            auth.signInWithPopup(provider).catch((error) => {
              alert(error.message);
            });
          }}
        >
          Sign in with Google
        </Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;
`;
const LoginInnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.24);

  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }
  > Button {
    margin-top: 50px;
    text-transform: intherit !important;
    background-color: #4285f4 !important;
    color: white;
  }
`;
