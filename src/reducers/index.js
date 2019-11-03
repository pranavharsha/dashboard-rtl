import { combineReducers } from 'redux';
import login from './loginReducers';
import members from './membersReducers';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
    login: login,
    members: members,
    form: formReducer,
});
