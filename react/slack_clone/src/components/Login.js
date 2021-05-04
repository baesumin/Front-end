import React from 'react';
import styled from 'styled-components';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LanguageIcon from '@material-ui/icons/Language';

function Login() {
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
        <GoogleLogin>
          <img src="/googleSVG.svg" style={{ width: '20px' }} />
          &nbsp;&nbsp;&nbsp;Google을(를) 사용하여 로그인
        </GoogleLogin>
        <AppleLogin>
          <img src="/appleSVG.svg" style={{ width: '35px' }} />
          &nbsp;Apple을(를) 사용하여 로그인&nbsp;&nbsp;
        </AppleLogin>
      </LoginInnerContainer>

      <Footer>
        <Option>개인정보 보호 및 약관</Option>
        <Option>문의하기</Option>
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
  height: 877px;
  margin: auto;
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
const Footer = styled.div`
  display: flex;
  justify-content: center;
  height: 26px;
  margin-top: 32px;
  margin-bottom: 32px;
  padding-right: 7px;
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

  > .MuiSvgIcon-root {
    font-size: 16px;
  }
  :hover {
    text-decoration: underline;
    color: #0b4c8c;
  }
`;
