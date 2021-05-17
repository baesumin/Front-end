import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { auth, db } from '../firebase';
import { SelectTab } from '../redux/setting';
import { setTitle } from '../redux/user';
import firebase from 'firebase';

function SidebarOption({ Icon, title, id }) {
  const dispatch = useDispatch();
  const { curTab, isChannelTabOpen } = useSelector((state) => state.setting);
  const [GoogleUser] = useAuthState(auth);
  const { user } = useSelector((state) => state.user);
  const curUser = GoogleUser ? GoogleUser : user;
  const [roomUsers] = useCollection(
    id && db.collection('rooms').doc(id).collection('users')
  );

  let isFirst = false;

  const promise = async () => {
    isFirst = true;

    await roomUsers?.docs.map((doc) => {
      const { uid } = doc.data();
      if (curUser.uid === uid) {
        isFirst = false;
      }
    });
  };
  const targetUser = async () => {
    if (id === '0' || id === '1' || id === '2') {
      return;
    }
    await promise();

    if (isFirst) {
      db.collection('rooms').doc(id).collection('users').add({
        user: curUser.displayName,
        userImage: curUser.photoURL,
        uid: curUser.uid
      });

      db.collection('rooms')
        .doc(id)
        .collection('messages')
        .add({
          message: `#${title}에 참여했습니다.`,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          user: curUser.displayName,
          userImage: curUser.photoURL
        });
    }
    isFirst = false;
  };

  return (
    <SidebarOptionContainer
      isChannelTabOpen={isChannelTabOpen}
      onClick={() => {
        dispatch(SelectTab(id));
        dispatch(setTitle(title));
        targetUser();
      }}
      curTab={curTab}
      id={id}
    >
      {Icon && <Icon style={{ padding: 10 }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChannel>
          <span>#&nbsp;&nbsp;</span> {title}
        </SidebarOptionChannel>
      )}
    </SidebarOptionContainer>
  );
}

export default SidebarOption;

const SidebarOptionContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;

  display: ${(props) => {
    if (props.id === '0' || props.id === '1' || props.id === '2') {
      return '';
    }
    if (!props.isChannelTabOpen && props.curTab !== props.id) {
      return 'none';
    }
  }};
  color: ${(props) => {
    if (props.id === props.curTab) return 'white';
    else return '#b7a5b7';
  }};
  background-color: ${(props) => {
    if (props.id === props.curTab) return '#1264a3';
    else return 'none';
  }};
  height: 27px;
  padding-left: 3px;
  margin: 2px;

  > .MuiSvgIcon-root {
    font-size: 16px;
    stroke: white;
    stroke-width: 0.4px;
  }
  :hover {
    cursor: pointer;
    color: '#b7a5b7';
    background-color: ${(props) => {
      if (props.id === props.curTab) return '#1264a3';
      else return 'var(--slack-header-color)';
    }};
  }
`;
const SidebarOptionChannel = styled.div`
  margin-left: 25px;
  font-size: 15px;
  font-weight: 600;
  > span {
    font-size: 18px;
  }
`;
