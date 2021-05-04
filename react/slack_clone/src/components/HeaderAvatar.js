import React from 'react';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import { AvatarModalOpen } from '../redux/setting';
import AvatarModal from './AvatarModal';
import { useDispatch, useSelector } from 'react-redux';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

const StyledBadge = withStyles((props) => ({
  badge: {
    backgroundColor: (props) => props.backgroundColor,
    color: '#44b700',
    boxShadow: `0 0 0 3px var(--slack-header-color)`
  }
}))(Badge);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(0.5)
    }
  },
  size: {
    width: theme.spacing(3.5),
    height: theme.spacing(3.5)
  }
}));

export default function BadgeAvatars() {
  const classes = useStyles();
  const { isAvatarModalOpen } = useSelector((state) => state.setting);
  const dispatch = useDispatch();
  const [GoogleUser] = useAuthState(auth);
  const { user, isActivate } = useSelector((state) => state.user);
  const curUser = GoogleUser ? GoogleUser : user;

  return (
    <>
      {isAvatarModalOpen ? <AvatarModal /> : null}
      <div className={classes.root}>
        <StyledBadge
          backgroundColor={isActivate ? '#44b700' : 'white'}
          overlap="circle"
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
          variant="dot"
          onClick={() => {
            dispatch(AvatarModalOpen(!isAvatarModalOpen));
          }}
        >
          <Container isActivate={isActivate}>
            <Avatar
              className={classes.size}
              variant="rounded"
              alt={curUser?.displayName}
              src={curUser?.photoURL}
              style={{ backgroundColor: '#0089D2' }}
            />
          </Container>
        </StyledBadge>
      </div>
    </>
  );
}

const Container = styled.div`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;
