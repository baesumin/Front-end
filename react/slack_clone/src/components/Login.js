import React, { useState } from 'react';
import styled from 'styled-components';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LanguageIcon from '@material-ui/icons/Language';
import Divider from '@material-ui/core/Divider';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { auth, provider } from '../firebase';
import { login } from '../redux/user';
import Checkbox from '@material-ui/core/Checkbox';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

function Login() {
  const [checked, setChecked] = useState(false);
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
      return alert('이름을 입력해주세요.');
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
  const googleLogin = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider);
  };

  return (
    <LoginContainer>
      <Banner>이 페이지를 보려면 로그인해야 합니다.</Banner>
      <Header>
        <img
          style={{ width: '134px', height: '34px' }}
          alt=""
          src="https://a.slack-edge.com/bv1-9/slack_logo-ebd02d1.svg"
        />
      </Header>
      <LoginInnerContainer>
        <LoginTitle>테스트에 로그인</LoginTitle>
        <LoginSubTitle>w1619832526-czh832082.slack.com</LoginSubTitle>
        <GoogleLogin onClick={googleLogin}>
          <img src="/googleSVG.svg" style={{ width: '20px' }} />
          &nbsp;&nbsp;&nbsp;Google을(를) 사용하여 로그인
        </GoogleLogin>
        <AppleLogin>
          <img src="/appleSVG.svg" style={{ width: '35px' }} />
          &nbsp;Apple을(를) 사용하여 로그인&nbsp;&nbsp;
        </AppleLogin>
        <Divider />
        <SplitDivider>
          <Dividers>
            <hr style={{ backgroundColor: '#bcbcbc' }} />
          </Dividers>
          <div>또는</div>
          <Dividers>
            <hr />
          </Dividers>
        </SplitDivider>
        <form>
          <div>이름</div>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name (required if registering)"
            type="text"
          />
          <div>프로필 이미지</div>
          <input
            value={profilePic}
            onChange={(e) => setProfilePic(e.target.value)}
            placeholder="Profile pic URL (optional)"
            type="text"
          />
          <div>이메일 주소</div>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@work-email.com"
            type="email"
          />
          <div>비밀번호</div>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            type="password"
          />
        </form>
        <Button onClick={register}>로그인</Button>
        <CheckBoxContainer>
          <Checkbox
            checked={checked}
            onChange={() => {
              setChecked(!checked);
            }}
            color="primary"
            size="small"
            style={{ marginLeft: '-11px' }}
          />
          이 장치에 로그인 정보 저장
        </CheckBoxContainer>
        <LoginOption>
          비밀번호를 잊으셨나요? <strong>로그인 도움 받기</strong>
        </LoginOption>
        <LoginOption>
          다른 워크스페이스를 찾고 있나요? <strong>내 워크스페이스 찾기</strong>
        </LoginOption>
        <SignedMsg>You're already signed in to...</SignedMsg>
        <WorkPlaceContainer>
          <TokTokWorkPlace>
            <TitleImage>
              <img
                alt=""
                style={{ width: '38px' }}
                src="https://a.slack-edge.com/80588/img/avatars-teams/ava_0025-88.png"
              />
            </TitleImage>
            <div>
              <TitleTok>toktok mobile</TitleTok>
              <SubTok>
                <PermIdentityIcon />
                &nbsp;23 · toktokmobile.slack.com
              </SubTok>
            </div>
            <StartButton>
              <a href="https://toktokmobile.slack.com/?redir=%2Fgantry%2Fclient%3Fselected_team_id%3DT020J8SURD3">
                실행
              </a>
            </StartButton>
          </TokTokWorkPlace>
        </WorkPlaceContainer>
      </LoginInnerContainer>

      <Footer>
        <Option>
          <a href="https://slack.com/intl/ko-kr/legal">개인정보 보호 및 약관</a>
        </Option>
        <Option>
          <a href="https://w1619832526-czh832082.slack.com/?redir=%2Fhelp%2Frequests%2Fnew%3Fgeocode%3Dko-kr">
            문의하기
          </a>
        </Option>
        <Option>
          <LanguageIcon />
          &nbsp;지역 변경
          <ExpandMoreIcon />
        </Option>
      </Footer>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e8e8e8;
  height: 46px;
  font-size: 14px;
  font-weight: 900;
  color: #1d1c1d;
  letter-spacing: -0.3px;
  border-bottom: 1px solid #abaaab;
`;
const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 127px;
`;
const LoginInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  margin: auto;

  > form {
    display: flex;
    flex-direction: column;
    font-size: 14px;
    font-weight: 700;
    margin-top: 25px;
  }
  > form > div {
    margin-bottom: 10px;
  }
  > form > input {
    width: 396px;
    height: 40px;
    font-size: 16px;
    margin-bottom: 10px;
    border-radius: 5px;
    border: 1px solid gray;
    text-indent: 0.5rem;

    :focus {
      /* box-shadow: 1px 1px 1px 0 #bbe1f1; */
      box-shadow: -2px -2px 0px 2px #bbe1f1, -2px 2px 0px 2px #bbe1f1,
        2px -2px 0px 2px #bbe1f1, 2px 2px 0px 2px #bbe1f1;
      transition: box-shadow 0.1s ease-in-out;
      outline: none;
    }
  }
  > Button {
    display: flex;
    width: 400px;
    margin-top: 22px;
    color: white;
    font-size: 18px;
    font-weight: 800;
    letter-spacing: -1.2px;
    background-color: #4a154b;

    :hover {
      opacity: 0.9;
      background-color: var(--slack-header-color);
      transition: opacity 0.1s ease-in-out;
    }
  }
`;
const LoginTitle = styled.div`
  font-size: 48px;
  font-weight: 900;
  letter-spacing: -1.5px;
  line-height: 2.25rem;
  height: 50px;
`;
const LoginSubTitle = styled.div`
  margin-top: 10px;
  letter-spacing: 0.9px;
  font-size: 17px;
  font-weight: 500;
  color: #454245;
`;
const GoogleLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #3871d0;
  border-radius: 5px;
  width: 396px;
  height: 40px;
  margin-top: 33px;
  color: #3871d0;
  font-weight: 700;
  font-size: 17px;
  letter-spacing: -0.4px;

  :hover {
    cursor: pointer;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
  }
`;
const AppleLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  border-radius: 5px;
  width: 396px;
  height: 40px;
  margin-top: 16px;
  color: black;
  font-weight: 700;
  font-size: 17px;
  letter-spacing: -0.4px;

  :hover {
    cursor: pointer;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
  }
`;
const SplitDivider = styled.div`
  width: 396px;
  height: 22px;
  display: flex;
  margin-top: 25px;

  > div {
    display: flex;
    justify-content: center;
    width: 70px;
    font-size: 14px;
  }
`;
const Dividers = styled.div`
  display: flex;
  flex: 1;
  align-items: center;

  > hr {
    flex: 1;
    border: none;
    height: 1px;
    background-color: #dddddd;
  }
`;
const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 400px;
  font-size: 14px;
  margin-bottom: 12px;
  margin-top: 5px;
`;
const LoginOption = styled.div`
  width: 400px;
  font-size: 13px;
  color: #616061;
  letter-spacing: -0.8px;
  line-height: 1.7rem;

  > strong {
    color: #0b4c8c;
    font-weight: 900;
    :hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;
const SignedMsg = styled.div`
  margin-top: 36px;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.2px;
`;
const WorkPlaceContainer = styled.div`
  border: 1px solid lightgray;
  border-radius: 5px;
  width: 496px;
  height: 100px;
  margin-top: 22px;
`;
const TokTokWorkPlace = styled.div`
  display: flex;
  align-items: center;
`;
const TitleImage = styled.div`
  margin-left: 23px;
  margin-top: 27px;

  > img {
    border-radius: 4px;
  }
`;
const TitleTok = styled.div`
  margin-top: 23px;
  margin-left: 16px;
  font-size: 17px;
  font-weight: 700;
`;
const SubTok = styled.div`
  display: flex;
  align-items: center;
  margin-left: 14px;
  font-size: 13px;
  color: gray;
  margin-top: 2px;

  > .MuiSvgIcon-root {
    font-size: 17px;
  }
`;
const StartButton = styled.div`
  border: 1px solid #b5b4b5;
  border-radius: 5px;
  width: 78px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-left: auto;
  margin-right: 23px;
  font-weight: 900;
  font-size: 14px;
  letter-spacing: -0.7px;

  > a {
    text-decoration: none;
    color: black;
  }
  :hover {
    cursor: pointer;
    background-color: #f6f6f6;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
  }
`;
const Footer = styled.div`
  display: flex;
  justify-content: center;
  height: 26px;
  margin-top: 32px;
  margin-bottom: 32px;
  padding-right: 7px;
  :hover {
    cursor: pointer;
  }
`;
const Option = styled.div`
  display: flex;
  align-items: center;
  margin-right: 12px;
  margin-left: 4px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.3px;
  color: #696969;

  > a {
    color: #696969;
    text-decoration: none;
    :hover {
      text-decoration: underline;
      color: #0b4c8c;
    }
  }
  > .MuiSvgIcon-root {
    font-size: 16px;
  }
  :hover {
    text-decoration: underline;
    color: #0b4c8c;
  }
`;
