import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { ChannelAddModalOpen, ChannelAddDropdownOpen } from '../redux/setting';

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
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        disableEnforceFocus={true}
      >
        {body}
      </Modal>
    </div>
  );
}
