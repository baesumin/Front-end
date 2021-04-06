import AsyncStorage from '@react-native-community/async-storage';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        case 'signup':
            return { errorMessage: '', token: action.payload };
        default:
            return state;
    }
};

const signup = (dispatch) => {
    return async ({ email, password }, callback) => {
        // make api request to sign up with that email and password
        try {
            const response = await trackerApi.post('/signup', { email, password });
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({ type: 'signup', payload: response.data.token });

            // navigate to main flow
            navigate('TrackList');
        } catch (err) {
            dispatch({ type: 'add_error', payload: 'Someting went wrong with sign up' });
        }
        // if we sign up, modify our state, and say that we are authenticated
        // if signing up falis.
    };
};

const signin = (dispatch) => {
    return ({ email, password }) => {
        // try signin
        //success
        // fail
    };
};

const signout = (dispatch) => {
    return ({ email, password }) => {
        // try signout
        //success
        // fail
    };
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup },
    { token: null, errorMessage: '' }
);
