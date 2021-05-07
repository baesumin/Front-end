import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { ChannelAddModalOpen, ChannelAddDropdownOpen, SelectTab } from '../redux/setting';
import styled from 'styled-components';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import { teal, grey } from '@material-ui/core/colors';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import { auth, db } from '../firebase';
import firebase from 'firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function ChannelAddModal() {
  const [inputName, setInputName] = useState('');
  const [inputExplanation, setInputExplanation] = useState('');
  const dispatch = useDispatch();
  const { isChannelAddModalOpen } = useSelector((state) => state.setting);
  const [GoogleUser] = useAuthState(auth);
  const { user } = useSelector((state) => state.user);
  const curUser = GoogleUser ? GoogleUser : user;

  const addChannel = () => {
    if (inputName) {
      db.collection('rooms')
        .add({
          name: inputName,
          explanation: inputExplanation || '주제 추가'
        })
        .then((docRef) => {
          dispatch(SelectTab(docRef.id));
          dispatch(ChannelAddModalOpen(false));

          db.collection('rooms').doc(docRef.id).collection('users').add({
            user: curUser.displayName,
            userImage: curUser.photoURL,
            uid: curUser.uid
          });

          db.collection('rooms')
            .doc(docRef.id)
            .collection('messages')
            .add({
              message: `#${inputName}에 참여했습니다.`,
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              user: curUser.displayName,
              userImage: curUser.photoURL
            });
        });
    }
  };

  return (
    <div>
      <Modal
        open={isChannelAddModalOpen}
        onClose={() => {
          dispatch(ChannelAddModalOpen(false));
        }}
        disableEnforceFocus={true}
        disableAutoFocus={true}
      >
        <ModalContainer>
          <InnerContainer>
            <ModalTitle>채널 생성</ModalTitle>
            <SubTitle>
              채널은 팀이 소통하는 공간입니다. 채널은 주제(예: 마케팅)를 중심으로 구성하는
              것이 가장 좋습니다.
            </SubTitle>
            <ChannelName>
              이름
              <input
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
                placeholder="#  예: 플랜 예산"
              />
            </ChannelName>
            <ChannelName>
              설명
              <input
                value={inputExplanation}
                onChange={(e) => setInputExplanation(e.target.value)}
              />
            </ChannelName>
            <ChannelSummary>무엇에 대한 채널인가요?</ChannelSummary>
            <PrivateContainer>
              <PrivateText>
                <PrivateTitle>비공개로 만들기</PrivateTitle>
                <PrivateSub>
                  채널이 비공개로 설정된 경우 초대를 통해서만 조회 또는 참여할 수
                  있습니다.
                </PrivateSub>
              </PrivateText>
              <PrivateSwitchButton>
                <PurpleSwitch
                  label="Normal"
                  color="default"
                  style={{ margin: '0 auto' }}
                />
              </PrivateSwitchButton>
            </PrivateContainer>
            <MakeContainer>
              <ErrorOutlineIcon />
              &nbsp;&nbsp;&nbsp;자세히 알아보기
              <MakeButton
                onClick={() => {
                  addChannel();
                }}
                inputName={inputName}
              >
                생성
              </MakeButton>
            </MakeContainer>
          </InnerContainer>
        </ModalContainer>
      </Modal>
    </div>
  );
}
const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  width: 520px;
  height: 520px;
  border-radius: 8px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const InnerContainer = styled.div`
  width: 465px;
  height: 470px;
`;
const ModalTitle = styled.div`
  font-size: 26px;
  font-weight: 800;
  line-height: 1.6rem;
  letter-spacing: -0.5px;
`;
const SubTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #6a696a;
  margin-top: 27px;
  margin-bottom: 22px;
  letter-spacing: -0.1px;
  line-height: 1.4rem;
`;
const ChannelName = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -1px;

  > input {
    margin-top: 9px;
    height: 40px;
    border-radius: 5px;
    font-size: 17px;
    font-weight: 600;
    border: 1px solid gray;
    text-indent: 12px;
    color: #5c5b5c;

    :focus {
      /* box-shadow: 1px 1px 1px 0 #bbe1f1; */
      box-shadow: -2px -2px 0px 2px #bbe1f1, -2px 2px 0px 2px #bbe1f1,
        2px -2px 0px 2px #bbe1f1, 2px 2px 0px 2px #bbe1f1;
      transition: box-shadow 0.1s ease-in-out;
      outline: none;
    }
  }
`;
const ChannelSummary = styled.div`
  font-size: 13px;
  color: gray;
  margin-top: 5px;
  letter-spacing: -0.8px;
`;
const PrivateContainer = styled.div`
  margin-top: 23px;
  display: flex;
  align-items: center;
`;
const PrivateText = styled.div``;
const PrivateTitle = styled.div`
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -1.1px;
`;
const PrivateSub = styled.div`
  margin-top: 1px;
  width: 305px;
  letter-spacing: -0.1px;
  line-height: 1.4rem;
  font-size: 14px;
  color: gray;
`;
const PrivateSwitchButton = styled.div`
  margin-left: 90px;
`;
const PurpleSwitch = withStyles({
  switchBase: {
    color: grey[700],
    '&$checked': {
      color: grey[50]
    },
    '&$checked + $track': {
      backgroundColor: teal[900]
    }
  },
  checked: {},
  track: {}
})(Switch);
const MakeContainer = styled.div`
  display: flex;
  align-items: center;
  color: gray;
  margin-top: 40px;
  font-size: 14px;

  > .MuiSvgIcon-root {
    font-size: 16px;
  }
`;
const MakeButton = styled.div`
  background-color: lightgray;
  margin-left: auto;
  width: 80px;
  height: 36px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  background-color: ${(props) => {
    if (props.inputName.length > 0) return '#007A5A';
    else return '#DDDDDD';
  }};
  color: ${(props) => {
    if (props.inputName.length > 0) return 'white';
    else return '#4d4c4d';
  }};

  ${(props) => {
    if (props.inputName.length > 0) return ':hover{opacity:0.9;cursor:pointer;}';
    else return ':hover{cursor:default}';
  }}
`;
