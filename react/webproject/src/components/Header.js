import React, { useState, useEffect } from 'react';
import './Header.css';
import { Button, Input, Modal } from '@material-ui/core';
import { auth, db } from '../firebase';
import { connect } from 'react-redux';
import { signIn, signUp } from '../actions';

function Header({ signIn, signUp, currentUser }) {
    const [open, setOpen] = useState(false);
    const [openSignIn, setOpenSignIn] = useState(false);
    const [user, setUser] = useState(null);

    return (
        <div className="app__header">
            <img
                className="app__headerImage"
                src="https://play-lh.googleusercontent.com/nYxL5NswAFjaxpwYsF3OzlKSfvfQI3wSf-8T9UT3qxuoTGsfGddhvOaHTxY7nU820NM"
                alt=""
            ></img>

            {currentUser ? (
                <Button onClick={() => auth.signOut()}>Logout</Button>
            ) : (
                <div className="app__loginContainer">
                    <Button onClick={() => signIn()}>Sign In</Button>
                    <Button onClick={() => signUp()}>Sign Up</Button>
                </div>
            )}
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        open: state.auth.open,
        openSignIn: state.auth.openSignIn,
        currentUser: state.auth.user
    };
};
export default connect(mapStateToProps, { signIn, signUp })(Header);
