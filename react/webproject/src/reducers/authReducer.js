import {
    SIGN_IN,
    SIGN_IN_CANCEL,
    SIGN_UP,
    SIGN_UP_CANCEL,
    CURRENT_USER
} from '../actions/types';

const INTIAL_STATE = {
    open: false,
    openSignIn: false,
    user: ''
};

export default (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_IN:
            return { ...state, openSignIn: true };
        case SIGN_IN_CANCEL:
            return { ...state, openSignIn: false };
        case SIGN_UP:
            return { ...state, open: true };
        case SIGN_UP_CANCEL:
            return { ...state, open: false };
        case CURRENT_USER:
            return { ...state, user: action.payload };
        default:
            return state;
    }
};
