import React, { useState, useEffect } from 'react';
import { Button, Input, Modal } from '@material-ui/core';
import { auth } from '../firebase';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { signInCancel, signUpCancel, currentUser } from '../actions';

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

function ModalLogin({ opens, openSignIns, signInCancel, signUpCancel, currentUser }) {
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);

    const [open, setOpen] = useState(false);
    const [openSignIn, setOpenSignIn] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubcribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                console.log(authUser);
                setUser(authUser);
                currentUser(authUser);
            } else {
                setUser(null);
                currentUser(null);
            }
        });

        return () => {
            unsubcribe();
        };
    }, [user, username]);

    useEffect(() => {
        setOpen(opens);
        setOpenSignIn(openSignIns);
    }, [opens, openSignIns]);

    const signUp = (event) => {
        event.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then((authUser) => {
                authUser.user.updateProfile({
                    displayName: username
                });
            })
            .catch((error) => alert(error.message));

        signUpCancel();
        setOpen(false);
    };

    const signIn = (event) => {
        event.preventDefault();

        auth.signInWithEmailAndPassword(email, password).catch((error) =>
            alert(error.message)
        );

        signInCancel();
        setOpenSignIn(false);
    };

    return (
        <div>
            <Modal open={open} onClose={() => signUpCancel()}>
                <div style={modalStyle} className={classes.paper}>
                    <form className="app__signup">
                        <center>
                            <img
                                className="app__headerImage"
                                src="https://play-lh.googleusercontent.com/nYxL5NswAFjaxpwYsF3OzlKSfvfQI3wSf-8T9UT3qxuoTGsfGddhvOaHTxY7nU820NM"
                                alt=""
                            />
                        </center>
                        <Input
                            placeholder="username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <Input
                            placeholder="email"
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Input
                            placeholder="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button type="submit" onClick={signUp}>
                            Login
                        </Button>
                    </form>
                </div>
            </Modal>
            <Modal open={openSignIn} onClose={() => signInCancel()}>
                <div style={modalStyle} className={classes.paper}>
                    <form className="app__signup">
                        <center>
                            <img
                                className="app__headerImage"
                                src="https://play-lh.googleusercontent.com/nYxL5NswAFjaxpwYsF3OzlKSfvfQI3wSf-8T9UT3qxuoTGsfGddhvOaHTxY7nU820NM"
                                alt=""
                            />
                        </center>
                        <Input
                            placeholder="email"
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Input
                            placeholder="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button type="submit" onClick={signIn}>
                            Login
                        </Button>
                    </form>
                </div>
            </Modal>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { opens: state.auth.open, openSignIns: state.auth.openSignIn };
};
export default connect(mapStateToProps, { signInCancel, signUpCancel, currentUser })(
    ModalLogin
);
