import { combineReducers } from 'redux';
import postsReducer from './postReducer';
import userReducers from './userReducers';

export default combineReducers({
    posts: postsReducer,
    users: userReducers
});
