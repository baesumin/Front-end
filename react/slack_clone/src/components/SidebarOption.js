import React, { useEffect, useState } from 'react';
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
  const { curTab } = useSelector((state) => state.setting);
  const [GoogleUser] = useAuthState(auth);
  const { user } = useSelector((state) => state.user);
  const curUser = GoogleUser ? GoogleUser : user;
  const [roomUsers] = useCollection(
    curTab && db.collection('rooms').doc(curTab).collection('users')
  );
  const [isFirst, setIsFirst] = useState(false);

  useEffect(() => {
    setIsFirst(true, () => {
      roomUsers?.docs.find((doc) => {
        const { uid } = doc.data();
        console.log(`${uid}  ${curUser.uid}`);
        if (curUser.uid === uid) {
          setIsFirst(false);
        }
      });
    });
    console.log(isFirst);
  }, [roomUsers]);

  const targetUser = () => {
    if (isFirst) {
      console.log(isFirst);
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
  };

  return (
    <SidebarOptionContainer
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
