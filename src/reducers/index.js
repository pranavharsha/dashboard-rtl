import { combineReducers } from 'redux';
import login from './loginReducers';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
    login: login,
    form: formReducer,
});
