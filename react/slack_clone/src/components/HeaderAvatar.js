import React from 'react';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import { AvatarModalOpen } from '../redux/setting';
import AvatarModal from './AvatarModal';
import { useDispatch, useSelector } from 'react-redux';

const StyledBadge = withStyles(() => ({
  badge: {
    backgroundColor: '#44b700',
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

  return (
    <>
      {isAvatarModalOpen ? <AvatarModal /> : null}
      <div className={classes.root}>
        <StyledBadge
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
          <Container>
            <Avatar
              className={classes.size}
              variant="rounded"
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
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
