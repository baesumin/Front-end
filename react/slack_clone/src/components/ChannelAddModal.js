import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { ChannelAddModalOpen, ChannelAddDropdownOpen } from '../redux/setting';
import styled from 'styled-components';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

export default function ChannelAddModal() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const dispatch = useDispatch();
  const { isChannelAddModalOpen } = useSelector((state) => state.setting);

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Text in a modal</h2>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
    </div>
  );

  return (
    <div>
      <Modal
        open={isChannelAddModalOpen}
        onClose={() => {
          dispatch(ChannelAddModalOpen(false));
        }}
        disableEnforceFocus={true}
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
              <input placeholder="# 예: 플랜 예산" />
            </ChannelName>
            <ChannelName>
              설명
              <input />
            </ChannelName>
            <ChannelSummary>무엇에 대한 채널인가요?</ChannelSummary>
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
  border: 1px solid black;
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
  margin-top: 19px;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -1px;

  > input {
    margin-top: 9px;
    height: 40px;
    border-radius: 5px;
    font-size: 17px;
    font-weight: 500;
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
  letter-spacing: -0.3px;
`;
const PrivateContainer = styled.div``;
const PrivateText = styled.div``;
const PrivateTitle = styled.div``;
const PrivateSub = styled.div``;
const PrivateRadioButton = styled.div``;
const MakeContainer = styled.div``;
const MakeButton = styled.div``;
