import { SIGN_IN, SIGN_IN_CANCEL, SIGN_UP, SIGN_UP_CANCEL, CURRENT_USER } from './types';

export const signIn = () => {
    return {
        type: SIGN_IN
    };
};
export const signInCancel = () => {
    return {
        type: SIGN_IN_CANCEL
    };
};
export const signUp = () => {
    return {
        type: SIGN_UP
    };
};
export const signUpCancel = () => {
    return {
        type: SIGN_UP_CANCEL
    };
};
export const currentUser = (user) => {
    return {
        type: CURRENT_USER,
        payload: user
    };
};
