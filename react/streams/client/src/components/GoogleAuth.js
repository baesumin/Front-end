import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
    //state = { isSignedIn: null };
    componentDidMount() {
        window.gapi.load('client:auth2', async () => {
            await window.gapi.client.init({
                clientId:
                    '341829806298-it1m3lu8rtd3mdncpkhao09irmqiiq5v.apps.googleusercontent.com',
                scope: 'email'
            });

            this.auth = window.gapi.auth2.getAuthInstance();

            this.onAuthChange(this.auth.isSignedIn.get());
            this.auth.isSignedIn.listen(this.onAuthChange);
        });
    }

    onAuthChange = (isSignedIn) => {
        //this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    };

    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    };

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return (
                <button
                    onClick={this.onSignOutClick}
                    className="ui red google button"
                >
                    <i className="google icon" />
                    Sign Out
                </button>
            );
        } else {
            return (
                <button
                    onClick={this.onSignInClick}
                    className="ui red google button"
                >
                    <i className="google icon" />
                    Sign In with Google
                </button>
            );
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>;
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
